import React from 'react';
import './contacts.css';
import linkedIn from '../../assets/linkedinIcon.png';
import github from '../../assets/githubIcon.png';

const Contacts = () => {
    return (
        <section id="contacts">
            <span className="contactTitle">Contact Me</span>
            {/* <span className="contactDesc">Add me on my socials!</span> */}
            <div className="links">
                <img src={linkedIn} alt="LinkedIn" className="link" />
                <img src={github} alt="gitHub" className="link" />
            </div>
        </section>
    )
}

export default Contacts;