import React from 'react';
import './projects.css';
import newMom from '../../assets/numomImg.png';
import paws from '../../assets/pawsFound.png';
import jpmc from '../../assets/jpmc.png';
import movie from '../../assets/cinema.png';

const Projects = () =>{
    return(
        <section id="projects">
            <span className="projectTitle">Projects</span>
            <span className="projectDescription">These are the projects I have worked on which can be found on my Github.</span>
            <div className="projectBars">
                <div className="projectBar">
                    <img src={newMom} alt="Contact" className="projectBarImg" />
                    <div className="projectBarText">
                        <a href="https://github.com/edumorlom/nuMom" target="_blank" rel="noopener noreferrer">
                            <h2>NuMom</h2></a>
                        <p>Collaborated with team members to support the development of NuMom for Fall 2023 term.
                            NuMom is a mobile phone based healthcare application designed for low-income minority mothers. This app
                             provides support in English, Spanish, and Haitian Creole. NuMom's goal is to provide early and continued 
                             access to healthcare for prenatal and postpartum mothers.
                        </p>
                        <br></br>
                        <p2>Languages/Frameworks: JavaScript, React.js, Node.js, Firebase</p2>
                    </div>
                </div>
                <div className="projectBar">
                    <img src={movie} alt="Contact" className="projectBarImg" />
                    <div className="projectBarText">
                        <a href="https://github.com/JoseBaez010/movie-web-app" target="_blank" rel="noopener noreferrer">
                            <h2>Cinematic Fanatic</h2></a>
                        <p>Cinematic Fanatic is a web app designed for movie enthusiasts. The app allows its users to search movies and find 
                            interesting statistics and data related to it. The purpose of this project was to showcase our knowledge and understanding 
                            of human computer interaction principles.
                        </p>
                        <br></br>
                        <p2>Languages/Frameworks: Python, TMDB API, Streamlit</p2>
                    </div>
                </div>
                <div className="projectBar">
                    <img src={paws} alt="Contact" className="projectBarImg" />
                    <div className="projectBarText">
                        <a href="https://github.com/iInnovators/PawsAndFound" target="_blank" rel="noopener noreferrer">
                            <h2>Paws and Found</h2></a>
                        <p>Paws and Found is an app for pets who are lost. Lost pet owners will be able to share information 
                            and users can DM them in case they have spotted/found the lost pets. The app is targeted for 
                            those who love and own animals looking for help or wanting to help others find their beloved pets. 
                            There are often many lost pet signs posted on lamps and trees which could fall off or not be noticed. 
                            This application helps spread information faster.</p>
                        <br></br>
                        <p2>Languages/Frameworks: Swift, Xcode, Back4app, Nuke</p2>
                    </div>
                </div>
                <div className="projectBar">
                    <img src={jpmc} alt="Contact" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>Electronic Statement Utility</h2>
                        <p>ESU is a tool that integrates with internal partner applications at JPMC to 
                            generate banking statements that show clients what products they are subscribed 
                            to. This applications allows the user to find a clients product information based on a variety 
                            of parameters. Users are also able to do maintenance on a clients account per their request.</p>
                            <br></br>
                        <p2>Languages/Frameworks: Java SpringBoot, JUnit, H2, postman, AWS, React.js, Typescript, and the JPM UI Toolkit</p2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects