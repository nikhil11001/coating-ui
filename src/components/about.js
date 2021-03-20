import React from "react";
import {
    Button, Container, Navbar, Nav, Form,
    FormControl, Carousel, NavDropdown, Row, Col, Image, Card, CardGroup
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/home.css";
import aboutUsIcon from "../images/about-us.png";

class About extends React.Component {
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
                            <Link to="/about">ABOUT US</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/product">SERVICES</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact">CONTACT</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar>
                <Container>
                    <div className="about-us">
                        <Image src={aboutUsIcon} width="10%"/>
                        <h3>
                            Bisco Group is one of the industry leader in protective coating solutions like Powder Coating and Cathodic Electro Deposition (CED) Coatings, catering to various segments like General Industries, Architectural, Automative, Consumer Goods, Telecom, Furnitures, Retail and others.
                        </h3>
                    </div>
                    <div className="margin-top-30">
                        <Row>
                            <Col md={6}>
                                <h1>
                                    About Bisco Group
                                    of Companies
                                </h1>
                                <h4>
                                    Bisco group was founded by late Mr. M.M.Haniff
                                    and he has been the Chief Architect of Bisco Group of Companies.
                                </h4>
                                <hr/>
                                <p>
                                Mr. M.M.Haniff carried and brought with him an experience of more than 45 year in the manufacturing segment and has been very active in overseeing major operations of the Group. Bisco group of company’s main area of operations is Surface finishing and protective coating on any metals. Major Sectors like Automotive, Structural Engineering & Construction, Hardware, Telecom, and Appliances etc. are being served by the group. Bisco group today has multiple operations in Mumbai, Chennai & Coimbatore.

The Bisco group management team consists of individuals from within the family with key talents, expertise and experience. The team is supported by a highly qualified Advisory Panel of industry experts.

Each member of the management team serves a critical role in the development and implementation of new surface coating technologies in the organization along with marketing, and distribution of Bisco group’s services. The involvement of each team member in all aspects of Bisco Groups business guarantees a continued focus on customer wants and needs.

Various reputed MNC organizations like Bajaj Auto, Mahindra & Mahindra, Phillips, Godrej & Boyce Mfg. Co. Ltd., Raychem RPG.Ltd., Siemens India Ltd., Elgi Compressors, Roots India, Laxmi mills, HCL Peripherals,  and others have appointed us as vendors for the powder coating requirements.
                                </p>
                            </Col>

                            <Col md={6}>
                                <h1>
                                    About Powder Coating & CED Coating
                                </h1>
                                <h4>
                                    Powder Coating in most cases is the final process for corrission protection & finishing.
                                    We take utmost care of your component.
                                </h4>
                                <hr/>


Bisco being one of the Industry Leader in Powder Coating applications serves a huge customer base spread across India with some customers as 100% export oriented units. Our solutions and services are environment friendly by way of corrosion protection which is a major problem faced across the globe.

Meeting the demands of a diverse group of industries like Agricultural, Home Appliances, Automotive, Computer, Construction Equipment, Electrical, Furniture and Industrial equipment requires an equally diverse range of custom coating services and technologies.

At Bisco in addition to Powder Coating at all location we also offer Continuous Band Coating using PPA PLASCOAT, CED Coatings/E-Coat, Anodizing, Powder Coatings, Rilsan Coatings, Alodine, Chromotising and PVC Plastisol Coating in some of our locations.
                               
                            </Col>
                        </Row>
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

export default About;