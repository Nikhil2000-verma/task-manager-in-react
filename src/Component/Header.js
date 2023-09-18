import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [theme, setTheme] = useState("light-theme")
    const toggleTheme = () => {
        if (theme === "dark-theme") {
            setTheme("light-theme")
        } else {
            setTheme("dark-theme")
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <div className='header-change'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    
                    <Link to={'/'} className="navbar-brand"><h3>Redux For State Management</h3></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                        </ul>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" onClick={() => toggleTheme()} role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label dark-style" for="flexSwitchCheckDefault">Dark Mode</label>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header