import "./CustomNav.css";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  NavLink,
  Col,
  Row,
  Container,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import React from "react";

class CustomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Container style={{ padding: 0, margin: 0, width: "100%" }} fluid>
        <Row id="color-bar"></Row>
        <Navbar className="header" light expand="md">
          <Col xs="auto">
            <NavbarBrand className="Title-text" href="/">
              Trevor Borden
            </NavbarBrand>
          </Col>

          {/* Toggler for small screens */}
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto nav-right" navbar>
              <NavItem>
                <NavLink className="nav-links" href="/about-me">
                  Abou<span className="letter-t">t</span> Me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-links" href="/projects">
                  Projec<span className="letter-t">t</span>s
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-links" href="/education">
                  Educa<span className="letter-t">t</span>ion
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-links" href="/experience">
                  Experience
                </NavLink>
              </NavItem>
              <NavItem>
                <a
                  className="nav-links"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Batrevinator"
                >
                  <GrGithub size={35} className="contact-icon" />
                </a>
              </NavItem>
              <NavItem>
                <a
                  className="nav-links"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/trevorborden"
                >
                  <GrLinkedin size={35} className="contact-icon" />
                </a>
              </NavItem>
              <NavItem>
                <a
                  className="nav-links"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=trevormborden@gmail.com&su=Greetings%20And%20Hello"
                >
                  <SiGmail size={35} className="contact-icon" />
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default CustomNav;
