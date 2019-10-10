import React, { useEffect } from 'react'

const Header = () => {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset
            const headerWrapper = document.querySelector('.header-wrap');
            if (headerWrapper) {
                if (scrollPosition > 5) {
                    headerWrapper.classList.add('header-shrink')
                } else {
                    headerWrapper.classList.remove('header-shrink')
                }
            }
        })
    })

    return (
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
                        <a className="nav-option" href="https://github.com/s-Hale/BuildTravelCards">
                            GitHub
                        </a>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Header
