import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'


function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    return (
        <div>

            <nav className='navbar'>
                <div className='logo'>
                    <h1><span>S</span>of<span>wa</span>re <span>D</span>ev<span>lo</span>per</h1>
                </div>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile}>
                    <li className='nav-list'>
                        <Link
                            activeClass='active'
                            to='Home'
                            spy={true}
                            smooth={true}
                            duration={800}>
                            <i className="nav bx bxs-home-alt-2"></i>
                            <span className="nav nav-name">Home</span>

                        </Link>
                    </li>

                    <li className='nav-list'>
                        <Link
                            activeClass='active'
                            to='About'
                            spy={true}
                            smooth={true}
                            duration={800}>
                            <i className="nav bx bxs-home-alt-2"></i>
                            <span className="nav nav-name">About</span>

                        </Link>
                    </li>

                    <li className='nav-list'>
                        <Link
                            activeClass='active'
                            to='Skills'
                            spy={true}
                            smooth={true}
                            duration={800}>
                            <i className="nav bx bxs-home-alt-2"></i>
                            <span className="nav nav-name">Skills</span>
                        </Link>
                    </li>

                    <li className='nav-list'>
                        <Link
                            activeClass='active'
                            to='ProjectsData'
                            spy={true}
                            smooth={true}
                            duration={800}>
                            <i className="nav bx bxs-home-alt-2"></i>
                            <span className="nav nav-name">Projects</span>
                        </Link>
                    </li>
                    <li className='nav-list'>
                        <Link
                            activeClass='active'
                            to='Contact'
                            spy={true}
                            smooth={true}
                            duration={800}>
                            <i className="nav bx bxs-home-alt-2"></i>
                            <span className="nav nav-name">Contact</span>
                        </Link>

                    </li>
                </ul>
                {/* <button className='mobile-menu-icon'
                    onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (
                        <i className='fas fa-times'></i>

                    ) : (
                        <i className='fas fa-bars'></i>
                    )
                    }

                </button> */}
            </nav>
        </div>
    )
}

export default Navbar