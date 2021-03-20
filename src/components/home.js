import React from "react";
import {
    Button, Container, Navbar, Nav, Form,
    FormControl, Carousel, NavDropdown, Row, Col, Image, Card, CardGroup, Jumbotron
} from "react-bootstrap"
import { Link } from "react-router-dom";
import "../css/home.css";

class Home extends React.Component {
    render() {
        return (
            <>
                {/* <Navbar collapseOnSelect bg="light" variant="light" fixed="top" expand="sm"> */}
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">

                    <Container>
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
                    </Container>
                </Navbar>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.garcross.co.uk/images/cropped-csm_KSP_0998_Poster_Slider-Bild_bb39c67d0c.jpg"
                        />
                        <Carousel.Caption>
                        <h1>YOUR POWDER COATING PARTNER</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.codinter.com/en/wp-content/uploads/sites/2/2020/11/BLOG-Electrostatic-powder-coating-or-liquid-paint-which-one-is-best-and-why-powder.jpg"
                        />
                       
                       <Carousel.Caption>
                       <h1>We are one of the leading Powder Coaters on a vast range of products for various industry segments</h1>
                       </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://avalonking.com/wp-content/uploads/2020/06/Powder-Coating-Training.jpg"
                        />
                         <Carousel.Caption>
                        <h1>BEST IN THE CLASS OF POWDER COATING</h1>
                        <h6>Group of Companies is an innovation-driven surface finishing and powder coating company that has carved a reputation as a trustworthy job service provider to a large number of customers across India.</h6>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <div className="slogna-text">
                    </div>


                    <Row className="margin-top-30">
                        <Jumbotron>
                            <h1 className="text-center">WHO ARE WE ?</h1>
                            <hr/>
                            <i>We, SEW Surface Coating Pvt. Ltd. are Manufacturer, Exporter & Supplier of Powder Coating Plants, Painting Plants, Pre-treatment Plants, Varnish Plants, Varnishing Plants, CED Coating Plants, Automated Transporter System, Pressurization Zone, Conveyor Systems, Special Purpose Ovens. Our setup is situated in Pune, Maharashtra, India & majorly we serve our customers from countries like African Countries like Algeria, Doha, Uganda, Mauritius, Kong, Laos, Sri Lanka, Vietnam, Zimbabwe, Bahrain, Kenya, India, Lebanon, Syria, Yemen, Bangladesh, Taiwan, Malaysia, Indonesia, Sudan, Kuwait, Namibia, Mozambique, Oman, Tanzania, Iran, Maldives, Tajikistan, Bhutan, South Africa, Zambia, Iraq, Mongolia, Thailand, Timor-Leste, Nepal, Israel, Brunei, Angola, Turkey, Dubai ( United Arab Emirates - UAE ), Burma, Japan, Turkmenistan, Saudi Arabia, Cambodia, Jordan, Pakistan, Uzbekistan, Philippines, Kazakhstan, China, Hong Kong, North Korea, Afghanistan, Qatar, Ghana, South Korea, Ethiopia, Singapore, Egypt, Kyrgyzstan, Nigeria, Congo, etc.</i>
                            <p className="text-center margin-top-10">
                            <i class="bi bi-star-fill margin-10"></i>
                            <i class="bi bi-star-fill margin-10"></i>
                            <i class="bi bi-star-fill margin-10"></i>
                            <i class="bi bi-star-fill margin-10"></i>
                            <i class="bi bi-star-fill margin-10"></i>
                            </p>
                        </Jumbotron>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <Card border="primary" style={{ width: '18rem' }}>
                                <Card.Header>
                                <i class="bi bi-gift-fill margin-10"></i>
                                    <b>Manufacturer, Supplier of :</b></Card.Header>
                                <Card.Body>

                                    <Card.Text>
                                        <ul>
                                            <li>
                                                Powder Coating Plants
                                            </li>
                                            <li>
                                                Painting Plants
                                            </li>
                                            <li>
                                                Pre-treatment Plants
                                            </li>
                                            <li>
                                                Varnishing Plants
                                            </li>
                                            <li>
                                                Powder Coating Plants
                                            </li>
                                            <li>
                                                Painting Plants
                                            </li>
                                            <li>
                                                Pre-treatment Plants
                                            </li>
                                            <li>
                                                Varnishing Plants
                                            </li>
                                            <li>
                                                Pre-treatment Plants
                                            </li>

                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card border="success" style={{ width: '18rem' }}>
                                <Card.Header>
                                <i class="bi bi-person-fill margin-10"></i>
                                    <b>About Us</b></Card.Header>
                                <Card.Body>

                                    <Card.Text>
                                        We Commenced its activities for establishments of surface coating plants all over INDIA. Using our engineering expertise & experience, We started our own Manufacturing unit in 1996, Which gives full satisfaction to our all customers up-to plant erection & commissioning from plant purchase.
                                        <Button variant="link">Read More</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card border="warning" style={{ width: '18rem' }}>
                                <Card.Header>
                                <i class="bi bi-trophy-fill margin-10"></i>
                                    <b>Achievements</b></Card.Header>
                                <Card.Body>

                                    <Card.Text>
                                        <ul>
                                            <li>
                                                We adopt NANO Technology for spray Pre-treatment
                                             </li>
                                            <li>
                                                We also introduce SCADA Technology
                                            </li>
                                            <li>
                                                We in the last few years have grown to become one of the most trusted names in the INDIA.
                                            </li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div className="margin-top-30">
                        <Row>
                            <Col md={4}>
                                <hr />
                            </Col>
                            <Col md={4}>
                                <h1>
                                    We take Great
                                    Pride
                                </h1>
                            </Col>
                            <Col md={4}>
                                <hr />
                            </Col>
                        </Row>
                    </div>
                    <div className="margin-top-30">
                        <Jumbotron>
                            <p>
                                We take pride in our job by providing quality powder coating services to our customers with proper inspection and packaging needs to meet customer requirements and standards.
                        </p>
                            <hr />
                            <Row>
                                <Col md={6}>
                                    <p>
                                        Our facilities have easier access for customers and increased space for managing larger volumes of work. We offer an advanced level of technical capabilities and exacting standards of quality control with the installation of the automated powder coating line and cutting edge equipment. We also specialize in powder coating on complicated componenets with masking and jigging needs.
                            </p>
                                </Col>

                                <Col md={6}>
                                    <p>
                                        Our customer base is comprised of General Industries, Architectural, Automative, Consumer Goods, Furnitures and others. And no job is too big or small. Our facilities allow us to offer powder coating, sandblasting, stripping, pretreatment, assembly, packaging and shipping. We employ highly skilled and dedicated personnel that strive to keep up with customer needs and requirements
                            </p>
                                </Col>
                            </Row>
                            <p><Button className="primary"> OUR SERVICES</Button> </p>
                        </Jumbotron>
                    </div>
                    {/* <div className="margin-top-30">
                        <Row>
                            <Col md={4}>
                                <hr />
                            </Col>
                            <Col md={4}>
                                <h3>OUR VALUABLE CLIENTS</h3>
                            </Col>
                            <Col md={4}>
                                <hr />
                            </Col>
                        </Row>
                    </div> */}
                    {/* <div className="margin-top-30">
                        <CardGroup>
                            <Card className="margin-10">
                                <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                            </Card>
                            <Card className="margin-10">
                                <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                            </Card>
                            <Card className="margin-10">
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmVbc4UwJXjdPvKLMlykxylnqSNLN6xZgRw&usqp=CAU" />
                            </Card>
                        </CardGroup>
                    </div> */}
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

export default Home;