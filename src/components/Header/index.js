import React from 'react'

const Header = () => (
    <div className="header-wrap">
        <nav>
            <ul className="nav-bar">
                <div className="opt-wrapper">
                    <option className="nav-option">about</option>
                </div>
                <div className="opt-wrapper">
                    <option className="nav-option">explore</option>
                </div>
                <div className="opt-wrapper">
                    <option className="nav-option">faqs</option>
                </div>
                <div className="opt-wrapper">
                    <option className="nav-option">contact</option>
                </div>
                <div className="opt-wrapper">
                    <a
                        className="nav-option"
                        href="https://github.com/s-Hale/BuildTravelCards"
                        target="_blank">
                        GitHub
                    </a>
                </div>
            </ul>
        </nav>
    </div>
)

export default Header
