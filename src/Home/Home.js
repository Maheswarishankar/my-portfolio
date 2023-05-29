import React from 'react'
import './Home.css'
import 'animate.css';
import gitImage from '../Images/gitImage.png'
import linkedInImage from '../Images/lin.png'

function Home() {
    return (
        <div className='home_container'>
            <div className='home-page'>
                <div className='home'>
                    <h1 className="animate__animated animate__bounce home-content">Hi</h1>
                    <h1 className="animate__animated animate__bounce home-content"> I'm Maheshwari</h1>
                    <h1 className="animate__animated animate__bounce home-content">Full Stack Devloper</h1>
                </div><br />
                <a
                    href={"https://github.com/Maheswarishankar"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={gitImage} alt="github" />
                </a>{" "}
                <a
                    href={"https://www.linkedin.com/in/maheshwari-s-b14023166/"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={linkedInImage} alt="linkedin" />
                </a>

                <br />

                <button className="btn-resume">
                    <a href={"https://drive.google.com/file/d/1EMGnpzCtqQcvlKCTyEJaDOmOm2H8fX7z/view?usp=share_link"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >Resume
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Home