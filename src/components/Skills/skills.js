import React from 'react';
import './skills.css';
import Contact from '../../assets/contact.png';

const Skills = () =>{
    return(
        <section id='skills'>
            <span className="skillTitle">About Me</span>
            <span className="skillDescription"> I am a computer science student persuing my bachelor's 
            in science degree from Florida International University. I am expected to graduate in December 2023. 
            I took a liking to computers and coding and decided this was the right path for me. I like the challenge of 
            problem-solving and find it satisfying when the code works bug free.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Contact} alt="Contact" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Languages</h2>
                        <p>Java, Python, SQL, Swift, Javascript, HTML/CSS</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Contact} alt="Contact" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Technologies</h2>
                        <p>React.js, Node.js, SprintBoot, Streamlit, Git, AWS, VS Code,
                             Xcode, IntelliJ, PyCharm, Postman, JUnit</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills