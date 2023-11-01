import React from 'react';
import './intro.css';
import bg from '../../assets/image2.png'; //for profile pic

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Jocelyn</span><br></br>Software Engineer</span>
                <p className="introPara">I am a computer science student with an interest in <br></br> full-stack development and UI/UX design</p>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;