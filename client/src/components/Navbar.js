import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from "../context/AuthContext";

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <ul id="nav-mobile" className="right">
            <li><NavLink to="/create">Create</NavLink></li>
            <li><NavLink to="/links">My Links</NavLink></li>
            <li><a href="/logout" onClick={logoutHandler}>Logout</a></li>
        </ul>
    )
}