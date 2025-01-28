import { Navbar, Container, Nav, Button } from "react-bootstrap"; 
import { useState, useEffect } from "react"; 
import logo from '../assets/img/logo.svg'; 
import navIcon1 from '../assets/img/nav-icon1.svg'; 
import navIcon2 from '../assets/img/nav-icon2.svg'; 
import navIcon3 from '../assets/img/nav-icon3.svg'; 
import navIcon4 from '../assets/img/nav-icon4.svg'; 

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])

      const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }

    

  return (
    <Navbar expand="md" className={scrolled ? ' scrolled' : ""}> 
      <Container>
      <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className="navbar-toggler-icon"></span> 
            </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('home')}>About</Nav.Link>
            <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#experiences"className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('experiences')}>Experiences</Nav.Link>
            <Nav.Link href="#connect"className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link> 
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/zahra-el-oula-bouafoura-255066274/" target="_blank" rel="noopener noreferrer"> <img src={navIcon1} alt =""/>  </a>
            <a href="https://github.com/zahraeloula" target="_blank" rel="noopener noreferrer"> <img src={navIcon4} alt =""/>  </a> 
            <a href="https://www.facebook.com/menou.miniar/" target="_blank" rel="noopener noreferrer"> <img src={navIcon2} alt =""/>  </a> 
            <a href="https://www.instagram.com/_miniar_bf/" target="_blank" rel="noopener noreferrer"> <img src={navIcon3} alt =""/>  </a> 
          
            </div>
            <Button className="vvd">
  <a href="#connect">
    <span>Let's Connect </span>
  </a>
</Button>
            </span> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

