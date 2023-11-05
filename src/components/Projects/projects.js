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
                        <p>
                        In collaboration with a dedicated team,
                        NuMom is a mobile healthcare application tailored for low-income minority mothers, with
                         a primary mission of facilitating accessible and sustained healthcare for prenatal and
                          postpartum mothers. It simplifies the process of locating affordable or free resources,
                           and offers support in multiple languages, including English, Spanish, and Haitian Creole.
                        </p>
                        <br></br>
                        <p2>Languages/Technologies: JavaScript, React.js, Node.js, Firebase</p2>
                    </div>
                </div>
                <div className="projectBar">
                    <img src={movie} alt="Contact" className="projectBarImg" />
                    <div className="projectBarText">
                        <a href="https://github.com/JoseBaez010/movie-web-app" target="_blank" rel="noopener noreferrer">
                            <h2>Cinematic Fanatic</h2></a>
                        <p>Cinematic Fanatic is a web application designed with movie enthusiasts in mind, created in
                             collaboration with my group for a class. This app empowers users to easily search for movies and access
                              interesting statistics and related data. The project demonstrates our skill in applying
                               principles of human-computer interaction to deliver a user-friendly experience.
                        </p>
                        <br></br>
                        <p2>Languages/Technologies: Python, Streamlit</p2>
                    </div>
                </div>
                <div className="projectBar">
                    <img src={paws} alt="Contact" className="projectBarImg" />
                    <div className="projectBarText">
                        <a href="https://github.com/iInnovators/PawsAndFound" target="_blank" rel="noopener noreferrer">
                            <h2>Paws and Found</h2></a>
                        <p>In collaboration with a group for a class project, Paws and Found is a pet-finding app that
                             helps reunite lost pets with their owners. Lost pet owners can share information, and users
                              can send direct messages if they've spotted a lost pet. This app is for animal lovers who
                               want to help or need help finding their pets quickly, as traditional lost pet signs can
                                easily go unnoticed.</p>
                        <br></br>
                        <p2>Languages/Technologies: Swift, Xcode, Back4app, Nuke</p2>
                    </div>
                </div>
                <div className="projectBar">
                    <img src={jpmc} alt="Contact" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>Electronic Statement Utility</h2>
                        <p>ESU is a tool that integrates with internal partner applications at JPMC to 
                            generate banking statements that show clients what products they are subscribed 
                            to. This applications allows the user to find a clients product information based on a variety 
                            of parameters. Users are also able to do maintenance on a clients account per their request. This cloud-based application
                            was developed in a collaborative setting wiith a group of interns during my internship with JPMorgan Chase & Co.</p>
                            <br></br>
                        <p2>Languages/Technologies: Java SpringBoot, JUnit, H2, Postman, AWS, React.js, Typescript, and the JPM UI Toolkit</p2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects