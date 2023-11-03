import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/temp-logo.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menuIcon.png';
import flower from '../../assets/flower.png';

const Navbar = () =>{
    const [showMenu, setShowMenu] = useState(false);
    return(
       <nav className='navbar'>
        <img src={flower} alt='logo' className='logo'/>
        <div className="desktopMenu">
            <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
            <Link activeClass='active' to="contacts" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Connect</Link>
        </div>
        {/* <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button> */}
        <img src={menu} alt='Menu' className='mobMenu'onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none' }}>
            <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to="contacts" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
        </div>
       </nav>
    )
}

export default Navbar