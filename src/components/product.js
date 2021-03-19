import React from "react";
import {
    Button, Container, Navbar, Nav, Form,
    FormControl, Carousel, NavDropdown, Row, Col, Image, Card, CardGroup
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/home.css";

class Product extends React.Component {
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
                    <h1>Product</h1>
                    <Row>
                        <Col md={9}>
                            <p>
                                Geometrix Automation And Robotics Pvt. Ltd. has raised the bar to a newer height by providing a Robotic solutions portfolio that includes Robotic Spot /Arc Welding Automation, Robotic Material Handling, Robotic CNC Machines Tending, Robotic Press Tending Applications, Robotic Marking Automation for Steel Industry, Manufacturing Line Automation, Robotic Packaging Lines, Robotic Laser Cutting, Robot Deployments in many discrete manufacturing applications.

                                Apart from providing the turnkey solutions for industries the company also provides a plethora of engineering services including Mechanical Design, Simulation, Robot Programming, PLC Programming and Integration services onsite and offsite. The company also use PLC to read digital and analog inputs from various field devices, execute a user-defined logic program and write the resulting digital and analog output values to various output elements. Additionally, the enterprise develops system for the interaction of the shop floor devices with the top floor for monitoring as well as controlling. The solutions and services offered by Geometrix are in line with the international quality parameters. Its hard-wearing and high performing deliverables are acknowledged for their economical and energy efficient performance in diverse industrial applications.

                                Geometrix is committed to Claint to maintain impressive ROI by providing robotic solutions with refurbished robots along with service and spare supports.
                    </p>
                        </Col>
                        <Col md={3}>
                                <Image src="data:image/jpeg;base64,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"/>

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

export default Product;