import React, {useContext, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from "../context/AuthContext";
import {useHistory} from "react-router-dom";


export const CreatePage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState('')

    const pressHandler = async event => {
        if (!event.key || event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                })
                history.push(`/detail/${data.link._id}`)

            } catch (e) {

            }
        }
    }

    return (
        <div className="row">
            <div className="col s12 m8 offset-m2 xl6 offset-xl3" style={{paddingTop: '2rem'}}>
                <div className="input-field">
                    <input placeholder="https://extremely-long-url.com"
                           id="link"
                           name="link"
                           type="text"
                           value={link}
                           onChange={e => setLink(e.target.value)}
                           onKeyPress={pressHandler}
                    />
                    <label htmlFor="link">Insert URL</label>
                </div>
                <a className="waves-effect waves-light btn-large blue darken-1" onClick={pressHandler}><i>Shorten</i></a>
            </div>
        </div>
    )
}