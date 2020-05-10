import React from 'react'

export const AuthPage = () => {
    return (
        <div className="row">
            <div className="col s6 offset-3">
                <h1>Short your URL</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Log in</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="Your e-mail" id="email" type="text"
                                       className="yellow-input validate"/>
                            </div>
                            <div className="input-field">
                                <input placeholder="Password" id="password" type="password"
                                       className="yellow-input validate"/>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4" style={{marginRight: 10}}>Enter</button>
                        <button className="btn grey lighten-1 black-text" style={{marginRight: 10}}>Register</button>
                        <a href="#">About</a>
                    </div>
                </div>
            </div>
        </div>
    )
}