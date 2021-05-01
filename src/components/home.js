import React from "react";
import {
  Button,
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Carousel,
  NavDropdown,
  Row,
  Col,
  Image,
  Card,
  CardGroup,
  Jumbotron,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/home.css";
import baner1 from "../images/lio-banner-1.jpg";
import baner2 from "../images/lio-banner-4.jpg";

class Home extends React.Component {
  render() {
    return (
      <>
        {/* <Navbar collapseOnSelect bg="light" variant="light" fixed="top" expand="sm"> */}
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
              <h1>
                We are one of the leading Powder Coaters on a vast range of
                products for various industry segments
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://avalonking.com/wp-content/uploads/2020/06/Powder-Coating-Training.jpg"
            />
            <Carousel.Caption>
              <h1>BEST IN THE CLASS OF POWDER COATING</h1>
              <h6>
                Group of Companies is an innovation-driven surface finishing and
                powder coating company that has carved a reputation as a
                trustworthy job service provider to a large number of customers
                across India.
              </h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 height-38rem" src={baner1} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 height-38rem" src={baner2} />
          </Carousel.Item>
        </Carousel>

        <Container>
          <div className="slogna-text"></div>

          <Row className="margin-top-30">
            <Jumbotron>
              <h1 className="text-center">WHO ARE WE ?</h1>
              <hr />
              <i>
                We, SEW Surface Coating Pvt. Ltd. are Manufacturer, Exporter &
                Supplier of Powder Coating Plants, Painting Plants,
                Pre-treatment Plants, Varnish Plants, Varnishing Plants, CED
                Coating Plants, Automated Transporter System, Pressurization
                Zone, Conveyor Systems, Special Purpose Ovens. Our setup is
                situated in Pune, Maharashtra, India & majorly we serve our
                customers from countries like African Countries like Algeria,
                Doha, Uganda, Mauritius, Kong, Laos, Sri Lanka, Vietnam,
                Zimbabwe, Bahrain, Kenya, India, Lebanon, Syria, Yemen,
                Bangladesh, Taiwan, Malaysia, Indonesia, Sudan, Kuwait, Namibia,
                Mozambique, Oman, Tanzania, Iran, Maldives, Tajikistan, Bhutan,
                South Africa, Zambia, Iraq, Mongolia, Thailand, Timor-Leste,
                Nepal, Israel, Brunei, Angola, Turkey, Dubai ( United Arab
                Emirates - UAE ), Burma, Japan, Turkmenistan, Saudi Arabia,
                Cambodia, Jordan, Pakistan, Uzbekistan, Philippines, Kazakhstan,
                China, Hong Kong, North Korea, Afghanistan, Qatar, Ghana, South
                Korea, Ethiopia, Singapore, Egypt, Kyrgyzstan, Nigeria, Congo,
                etc.
              </i>
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
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Header>
                  <i class="bi bi-gift-fill margin-10"></i>
                  <b>Manufacturer, Supplier of :</b>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <ul>
                      <li>Powder Coating Plants</li>
                      <li>Painting Plants</li>
                      <li>Pre-treatment Plants</li>
                      <li>Varnishing Plants</li>
                      <li>Powder Coating Plants</li>
                      <li>Painting Plants</li>
                      <li>Pre-treatment Plants</li>
                      <li>Varnishing Plants</li>
                      <li>Pre-treatment Plants</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card border="success" style={{ width: "18rem" }}>
                <Card.Header>
                  <i class="bi bi-person-fill margin-10"></i>
                  <b>About Us</b>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    We Commenced its activities for establishments of surface
                    coating plants all over INDIA. Using our engineering
                    expertise & experience, We started our own Manufacturing
                    unit in 1996, Which gives full satisfaction to our all
                    customers up-to plant erection & commissioning from plant
                    purchase.
                    <Link to="/about">
                      <Button variant="link">Read More</Button>
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card border="warning" style={{ width: "18rem" }}>
                <Card.Header>
                  <i class="bi bi-trophy-fill margin-10"></i>
                  <b>Achievements</b>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <ul>
                      <li>We adopt NANO Technology for spray Pre-treatment</li>
                      <li>We also introduce SCADA Technology</li>
                      <li>
                        We in the last few years have grown to become one of the
                        most trusted names in the INDIA.
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
                <h1 className="featurette-heading">We take Great Pride</h1>
              </Col>
              <Col md={4}>
                <hr />
              </Col>
            </Row>
          </div>
          <div className="margin-top-30">
            <Jumbotron>
              <p>
                We take pride in our job by providing quality powder coating
                services to our customers with proper inspection and packaging
                needs to meet customer requirements and standards.
              </p>
              <hr />
              <Row>
                <Col md={6}>
                  <p>
                    Our facilities have easier access for customers and
                    increased space for managing larger volumes of work. We
                    offer an advanced level of technical capabilities and
                    exacting standards of quality control with the installation
                    of the automated powder coating line and cutting edge
                    equipment. We also specialize in powder coating on
                    complicated componenets with masking and jigging needs.
                  </p>
                </Col>

                <Col md={6}>
                  <p>
                    Our customer base is comprised of General Industries,
                    Architectural, Automative, Consumer Goods, Furnitures and
                    others. And no job is too big or small. Our facilities allow
                    us to offer powder coating, sandblasting, stripping,
                    pretreatment, assembly, packaging and shipping. We employ
                    highly skilled and dedicated personnel that strive to keep
                    up with customer needs and requirements
                  </p>
                </Col>
              </Row>
              <p>
                <Link to="/product">
                  <Button className="primary"> OUR SERVICES</Button>{" "}
                </Link>
              </p>
            </Jumbotron>
          </div>
        </Container>

        <div
          className="margin-top-30"
          style={{ background: "black", color: "white" }}
        >
          <Container>
            <Row>
              <Col md={4}>
                <h6 className="margin-10">LINKS</h6>
                <div>
                  <p>
                    {" "}
                    <i className="bi bi-house-door margin-10"></i>HOME
                  </p>
                  <p>
                    <i className="bi bi-person margin-10"></i>ABOUT US{" "}
                  </p>
                  <p>
                    <i className="bi bi-screwdriver margin-10"></i>SERVICES
                  </p>
                  <p>
                    <i className="bi bi-telephone margin-10"></i>Contact
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <h6 className="margin-10">OUR SERVICES</h6>
                <div>
                  <p>
                    <i className="bi bi-check-circle margin-10"></i>Powder
                    Coatings
                  </p>
                  <p>
                    <i className="bi bi-check-circle margin-10"></i>Cathodic
                    Electro Deposition (CED){" "}
                  </p>
                  <p>
                    <i className="bi bi-check-circle margin-10"></i>Anodising
                  </p>
                  <p>
                    <i className="bi bi-check-circle margin-10"></i>Chromate
                    Conversion / Alodine Coating{" "}
                  </p>
                  <p>
                    <i className="bi bi-check-circle margin-10"></i>Plascoat PPA
                    571 Coating
                  </p>
                  <p>
                    <i className="bi bi-check-circle margin-10"></i>Plastisol
                    Dip Coating
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <h6 className="margin-10">CONTACT</h6>
                <p>
                  <i class="bi bi-cursor margin-10"></i>Unit No.3, Building
                  No.1, Ground Floor, Liliya Nagar, Off S.V.Road, Goregaon
                  (West), Mumbai-400 062. India.
                </p>

                <p>
                  <i class="bi bi-phone margin-10"></i>Phone:+91 9820058279
                </p>

                <p>
                  <i class="bi bi-envelope-open margin-10"></i>Email:
                  info@biscoindia.com
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Home;
