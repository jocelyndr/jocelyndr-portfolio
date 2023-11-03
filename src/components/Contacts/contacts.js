import React from 'react';
import './contacts.css';
import linkedIn from '../../assets/linkedinIcon.png';
import github from '../../assets/githubIcon.png';

const Contacts = () => {
    return (
        <section id="contacts">
            <span className="contactTitle">Connect With Me</span>
            {/* <span className="contactDesc">Add me on my socials!</span> */}
            <div className="links">
                <a href="https://www.linkedin.com/in/jocelyn-rodriguez-2a21b8170/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedIn} alt="LinkedIn" className="link" />
                </a>
                <a href="https://github.com/jocelyndr" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className="link" />
                </a>
            </div>
        </section>
    )
}

export default Contacts;