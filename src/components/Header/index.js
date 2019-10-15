import React, {useEffect} from 'react'
import {withRouter, Link} from 'react-router-dom'

function Header({location, history}) {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset
            const headerWrapper = document.querySelector('.header-wrap')
            if (headerWrapper) {
                if (scrollPosition > 5) {
                    headerWrapper.classList.add('header-shrink')
                } else {
                    headerWrapper.classList.remove('header-shrink')
                }
            }
        })
    })

    function handleClickHome() {
        history.push('/')
    }

    function handleClickAbout() {
        history.push('/about')
    }

    function handleClickExplore() {
        history.push('/explore')
    }

    function handleClickFaqs() {
        history.push('/faqs')
    }

    function handleClickContact() {
        history.push('/contact')
    }

    return (
        <div className="header-container">
            <div className="header-wrap">
                <nav>
                    <ul className="nav-bar">
                        <div className="opt-wrapper">
                            <option className="nav-option" onClick={handleClickHome}>
                                home
                            </option>
                        </div>
                        <div className="opt-wrapper">
                            <option className="nav-option" onClick={handleClickAbout}>
                                about
                            </option>
                        </div>
                        <div className="opt-wrapper">
                            <option className="nav-option" onClick={handleClickExplore}>
                                explore
                            </option>
                        </div>
                        <div className="opt-wrapper">
                            <option className="nav-option" onClick={handleClickFaqs}>
                                faqs
                            </option>
                        </div>
                        <div className="opt-wrapper">
                            <option className="nav-option" onClick={handleClickContact}>
                                contact
                            </option>
                        </div>
                        <div className="opt-wrapper">
                            <a
                                className="nav-option"
                                href="https://github.com/s-Hale/BuildTravelCards">
                                GitHub
                            </a>
                        </div>
                    </ul>
                </nav>
            </div>
            <div className="sub-header">
                {location.pathname.includes('/trip/') && (
                    <Link className="back-link-arrow" to="/">
                        ⬅
                    </Link>
                )}
            </div>
        </div>
    )
}

export default withRouter(Header)
