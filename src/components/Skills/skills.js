import React from 'react';
import './skills.css';
import image1 from '../../assets/languages.png';
import image2 from '../../assets/tech.png';

const Skills = () =>{
    return(
        <section id='skills'>
            <span className="skillTitle">About Me</span>
            <span className="skillDescription"> I am a computer science student at Florida International University, 
            pursuing my bachelor's degree with an expected graduation in December 2023. 
            My journey into the world of computers and coding was a deliberate choice, 
            driven by my passion for problem-solving. I find great satisfaction in ensuring
             bug-free code and thrive on the challenges this field presents.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={image1} alt="Contact" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Languages</h2>
                        <p>Java, Python, C, C++, SQL, Swift, JavaScript, HTML/CSS</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={image2} alt="Contact" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Technologies</h2>
                        <p>React.js, Node.js, SprintBoot, Streamlit, Git, AWS, VS Code,
                             Xcode, IntelliJ, PyCharm, Postman, JUnit, Firebase, Streamlit</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills