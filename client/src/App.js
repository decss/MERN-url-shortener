// import logo from './logo.svg'

import React from 'react'
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import {useRoutes} from "./routes"
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Navbar} from "./components/Navbar";
import {Loader} from "./components/Loader";
import 'materialize-css'


function App() {
    const {token, login, logout, userId, ready} = useAuth()
    const isAuthenticated = token ? true : false
    const routes = useRoutes(isAuthenticated)

    if (!ready) {
        return <Loader/>
    }

    return (
        <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
            <Router>
                <nav>
                    <div className="nav-wrapper blue darket-1" style={{padding: '0 2rem'}}>
                        <span style={{fontSize: '2rem'}} className="hide-on-small-only">Url shortener</span>
                        {isAuthenticated
                            ? <Navbar/>
                            : <ul id="nav-mobile" className="right">
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/login">Log In</NavLink></li>
                            </ul>
                        }
                    </div>
                </nav>
                <div className="container">
                    {routes}
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
