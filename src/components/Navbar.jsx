import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const toggleRedDmode = () => {
        props.selectDarkMode('red', '#38070c');
        props.alert("Switched to red dark mode!", "success")
    }
    const toggleDefaultDmode = () => {
        props.selectDarkMode('default', '#182940');
        props.alert("Switched to default dark mode!", "success")
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="About/">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {props.mode === 'dark' && <div className="d-flex-mx-5">
                        <input type="button" className="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="red dark mode" onClick={toggleRedDmode} style={{ backgroundColor: '#38070c' }} />
                        <input type="button" className="btn mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="default dark mode" onClick={toggleDefaultDmode} style={{ backgroundColor: '#182940' }} />
                    </div>}
                    <form className={`d-flex mx-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'Dark' : 'Light'}mode</label>
                        </div>
                    </form>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav >
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defautProps = {
    title: "Title here",
    aboutText: "About text here"
}