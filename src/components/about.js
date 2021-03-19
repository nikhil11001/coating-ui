import React from "react";
import {
    Button, Container, Navbar, Nav, Form,
    FormControl, Carousel, NavDropdown, Row, Col, Image, Card, CardGroup
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/home.css";

class About extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="light" variant="light" fixed="top">
                    <Navbar.Brand>
                    LOGO
                    </Navbar.Brand>
                    <Nav className="mr-auto">

                        <Nav.Link>
                            <Link to="/home">Home</Link>
                        </Nav.Link>
                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                            <Link to="/product">    Industrial Pcs</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                            <Link to="/product">PLC System</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                            <Link to="/product">I/O System</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                            <Link to="/about">About Us</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact">Contact</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar>

                <Container>
                    <div style={{ margin: "70px 0px" }}>
                    </div>
                    <h1>About Us</h1>
                    <Row>
                        <Col md={9}>
                            <p>
                                Geometrix Automation And Robotics Pvt. Ltd. has raised the bar to a newer height by providing a Robotic solutions portfolio that includes Robotic Spot /Arc Welding Automation, Robotic Material Handling, Robotic CNC Machines Tending, Robotic Press Tending Applications, Robotic Marking Automation for Steel Industry, Manufacturing Line Automation, Robotic Packaging Lines, Robotic Laser Cutting, Robot Deployments in many discrete manufacturing applications.

                                Apart from providing the turnkey solutions for industries the company also provides a plethora of engineering services including Mechanical Design, Simulation, Robot Programming, PLC Programming and Integration services onsite and offsite. The company also use PLC to read digital and analog inputs from various field devices, execute a user-defined logic program and write the resulting digital and analog output values to various output elements. Additionally, the enterprise develops system for the interaction of the shop floor devices with the top floor for monitoring as well as controlling. The solutions and services offered by Geometrix are in line with the international quality parameters. Its hard-wearing and high performing deliverables are acknowledged for their economical and energy efficient performance in diverse industrial applications.

                                Geometrix is committed to Claint to maintain impressive ROI by providing robotic solutions with refurbished robots along with service and spare supports.
                    </p>
                        </Col>
                        <Col md={3}>
                            <video width="400" controls>
                                <source src="https://www.youtube.com/watch?v=44cGHoXcpuc" type="video/mp4"/>
                                    </video>

                    </Col>
                    </Row>
                </Container>

                        <div className="margin-top-30" style={{ background: "black", color: "white" }}>
                            <Container>
                                <Row>
                                    <Col md={3}>
                                        <h6 className="margin-top-10">
                                            FOR ENQUIREY
                            </h6>
                                        <div>
                                            <Form>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter Name" />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                    <Form.Text className="text-muted">
                                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Message</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Message" />
                                                </Form.Group>
                                                <Button variant="primary" type="submit">
                                                    Submit
                                    </Button>
                                            </Form>
                                        </div>
                                    </Col>

                                    <Col md={4}>
                                        <h6 className="margin-top-10">
                                            CONTACT
                            </h6>
                                        <p>
                                            Address:- Factory - 53/1, Nigdi - Chakan Road, Near Talwade Circle,
                                            Talwade, Tal. Haveli, Dist. Pune, Maharashtra, India - 411062
                            </p>
                                        <p>
                                            Mobile :-
                            <br />
                            +91 9921001880
                            <br />
                            +91 9921001881
                            </p>
                                        <p>
                                            Email:-
                                <br />
                                myinfo@gmail.com
                            </p>
                                    </Col>

                                    <Col md={5}>
                                    <h6 className="margin-top-10">
                                    LOCATION MAP
                                </h6>
                                <div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.92836565562!2d73.7929269405248!3d18.52476632650221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1615096060797!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                                </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
            </>
        );
    }
}

export default About;