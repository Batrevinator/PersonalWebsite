import "./CustomNav.css"
import {HashLink} from "react-router-hash-link"
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Col
} from 'reactstrap';
import React from 'react';

class CustomNav extends React.Component{
  
  navStructure = [
    {to: "./path#top", label: "Home"},
    {to: "./#about-me", label: "About Me"},
    {to: "./#experience", label: "Experience"},
    {to: "./#projects", label: "Projects"},
    {to: "./#education", label: "Education"},
    {to: "./#contact", label: "Contact"}
  ];

  scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -85; 
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  render(){
    return (
          <Navbar className = "header"  container="fluid" fixed='top' dark expand = "false">
              <Col xs={{offset:1}}>
                <NavbarBrand className = "Title-text">Trevor Borden</NavbarBrand>
              </Col>
              <Nav className="ml-auto">
                  {this.navStructure.map((link) => (
                    <NavItem style={{margin: 20}} key={link.to}>
                        <HashLink style={{color: "#d1cbce", textDecoration: 'none' }} smooth to={link.to} scroll={el => this.scrollWithOffset(el)}>
                            {link.label}
                        </HashLink>
                    </NavItem>
                  ))}
              </Nav>
          </Navbar>
    );
  }
};

export default CustomNav;