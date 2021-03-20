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
                        CIA-COATING
                    </Navbar.Brand>
                    <Nav className="mr-auto">

                        <Nav.Link>
                            <Link to="/home">HOME</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/product">SERVICES</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about">ABOUT US</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact">CONTACT</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar>

                <Container>
                    <div style={{ margin: "70px 0px" }}>
                    </div>
                    <h1>SHEET METAL Powder Coating</h1>
                    <h6>
                        As with any other metal parts, powder coating on sheet metal requires the article to be pre-treated with 7 stage process involving degreasing, derusting, phospating and passivation to achive optimum coating results.
                    </h6>

                    <div className="margin-top-30">
                        <Row>
                            <Col md={4}>
                                <Image src="http://biscoindia.com/content/factory/images/Ass_576_450.jpg" width="80%" />
                            </Col>
                            <Col md={4}>
                                <Image src="http://biscoindia.com/content/factory/images/Chairs1_576_450.jpg" width="80%" />
                            </Col>
                            <Col md={4}>
                                <Image src="http://biscoindia.com/content/factory/images/railings_576_450.jpg" width="80%" />
                            </Col>
                        </Row>
                    </div>

                    <div className="margin-top-30">
                        <h1>COATING ON ALUMINIMUM & Pressure Die casting</h1>
                        <h6>
                            The aluminium pretreatment process is often done as RoHS-compatible chromate conversion coating or Phosphating of Aluminium. The process involves dgreasing, rinsing, etching, deoxidation and chromatising or phospating.
                    </h6>

                        <div className="margin-top-30">
                            <Row>
                                <Col md={4}>
                                    <Image src="http://biscoindia.com/content/factory/images/boc_576_450.jpg" width="80%" />
                                </Col>
                                <Col md={4}>
                                    <Image src="http://biscoindia.com/content/factory/images/casting_576_450.jpg" width="80%" />
                                </Col>
                                <Col md={4}>
                                    <Image src="http://biscoindia.com/content/factory/images/Tanks_576_450.jpg" width="80%" />
                                </Col>
                            </Row>
                        </div>
                    </div>


                    <div className="margin-top-30">
                        <h1>CONTINOUS COATING On Stainless Steel & bands</h1>
                        <h6>
                            The Pre-treatment before Powder coating on stainless steel is done with initial degreasing followed by a mild etch using phosphoric acid to provide some mechanical adhesion and finally passivation is done to clean up the residue.
                        </h6>

                        <div className="margin-top-30">
                            <Row>
                                <Col md={4}>
                                    <Image src="http://biscoindia.com/content/factory/images/CableTies_576_450.jpg" width="80%" />
                                </Col>
                                <Col md={4}>
                                    <Image src="http://biscoindia.com/content/factory/images/plastisol576_450.jpg" width="80%" />
                                </Col>
                                <Col md={4}>
                                    <Image src="http://biscoindia.com/content/factory/images/spaceframes_576_450.jpg" width="80%" />
                                </Col>
                            </Row>
                        </div>
                    </div>

                </Container>

                <div className="margin-top-30" style={{ background: "black", color: "white" }}>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <h6 className="margin-10">
                                    LINKS
                            </h6>
                                <div>
                                    <p> <i className="bi bi-house-door margin-10"></i>HOME</p>
                                    <p><i className="bi bi-person margin-10"></i>ABOUT US </p>
                                    <p><i className="bi bi-screwdriver margin-10"></i>SERVICES</p>
                                    <p><i className="bi bi-telephone margin-10"></i>Contact</p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <h6 className="margin-10">
                                    OUR SERVICES
                            </h6>
                                <div>
                                    <p>
                                    <i className="bi bi-check-circle margin-10"></i>Powder Coatings</p>
                                    <p>
                                    <i className="bi bi-check-circle margin-10"></i>Cathodic Electro Deposition (CED) </p>
                                    <p>
                                    <i className="bi bi-check-circle margin-10"></i>Anodising</p>
                                    <p>
                                    <i className="bi bi-check-circle margin-10"></i>Chromate Conversion / Alodine Coating </p>
                                    <p>
                                    <i className="bi bi-check-circle margin-10"></i>Plascoat PPA 571 Coating</p>
                                    <p>
                                    <i className="bi bi-check-circle margin-10"></i>Plastisol Dip Coating</p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <h6 className="margin-10">
                                    CONTACT
                            </h6>
                                <p>
                                <i class="bi bi-cursor margin-10"></i>Unit No.3, Building No.1, Ground Floor, Liliya Nagar, Off S.V.Road, Goregaon (West), Mumbai-400 062. India.</p>

                                <p>
                                <i class="bi bi-phone margin-10"></i>Phone:+91 9820058279</p>

                                <p>
                                <i class="bi bi-envelope-open margin-10"></i>Email: info@biscoindia.com</p>

                            </Col>

                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default Product;