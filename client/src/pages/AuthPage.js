import React, {useContext, useState, useEffect} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const {loading, error, request, clearError} = useHttp()
    const message = useMessage()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])
    // useEffect(() => {
    //     window.M.updateTextFields()
    // }, [])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {}
    }
    const loginHandler = async  () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s12 m8 offset-m2 xl6 offset-xl3">
                <h1>Short your URL</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Log in</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="Your e-mail"
                                       id="email"
                                       name="email"
                                       type="text"
                                       className="yellow-input validate"
                                       value={form.email}
                                       onChange={changeHandler}
                                />
                            </div>
                            <div className="input-field">
                                <input placeholder="Password"
                                       id="password"
                                       name="password"
                                       type="password"
                                       className="yellow-input validate"
                                       value={form.password}
                                       onChange={changeHandler}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4"
                                style={{marginRight: 10}}
                                onClick={loginHandler}
                                disabled={loading}
                        >Enter</button>

                        <button className="btn grey lighten-1 black-text"
                                style={{marginRight: 10}}
                                onClick={registerHandler}
                                disabled={loading}
                        >Register</button>
                        <a href="/about">About</a>
                    </div>
                </div>
            </div>
        </div>
    )
}