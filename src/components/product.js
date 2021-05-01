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
} from "react-bootstrap";
import "../css/home.css";
import wheelImg from "../images/wheel_arms.png";
import chasiImg from "../images/two_wheeler-chasi.jpg";
import twoWheelerBodyImg from "../images/two_wheeler_body.jpg";
import suspensionImg from "../images/Suspension.jpg";
import wiper from "../images/wipers.jpg";
import sheetImg from "../images/Meter-Box.jpg";
import casterImg from "../images/caster_wheel.jpg";
import tableImg from "../images/Metal_Dinnig_Table.jpg";
import hingesImg from "../images/hinges.jpg";
import fastnersImg from "../images/fastners.png";
import part1Img from "../images/part1.jpg";
import bedImg from "../images/bed.jpg";
import gateImg from "../images/gate.jpg";
import pipemg from "../images/pipe.png";

class Product extends React.Component {
  render() {
    return (
      <>
        <Container>
          <div style={{ margin: "70px 0px" }}></div>
          <h1>
            The Cathodic Electro Deposition{" "}
            <span className="featurette-heading text-muted">(CED)</span>
          </h1>
          <h6>
            Process is widely used in the automotive and other industries for
            better corrosion protection because of its ability to coat complex
            geometry parts with uniformity.
          </h6>

          <div className="margin-top-30">
            <Row>
              <Col md={4} className="margin-bottom-4px">
                <Image src={wheelImg} width="80%" />
              </Col>
              <Col md={4} lcassName="margin-bottom-4px">
                <Image src={chasiImg} width="80%" />
              </Col>
              <Col md={4} className="margin-bottom-4px">
                <Image src={suspensionImg} width="80%" />
              </Col>
            </Row>
            <Row className="margin-top-30">
              <Col md={4} lcassName="margin-bottom-4px">
                <Image src={wiper} width="80%" />
              </Col>
              <Col md={4} className="margin-bottom-4px">
                <Image src={twoWheelerBodyImg} width="80%" />
              </Col>
              <Col md={4} className="margin-bottom-4px">
                <Image src={pipemg} width="80%" />
              </Col>
            </Row>
          </div>

          <div className="margin-top-30">
            <h1>
              CED Coating For{" "}
              <span className="featurette-heading text-muted">
                Sheet Metal Components
              </span>
            </h1>
            <h6>
              We offer CED Coating Service for Sheet Metal Components using
              advanced machinery and superior grade materials that ensure rust
              resistance of products. i.e. we provide a rust proof coating on
              various components. 
            </h6>

            <div className="margin-top-30">
              <Row>
                <Col md={4}>
                  <Image src={sheetImg} width="80%" />
                </Col>
                <Col md={4}>
                  <Image src={casterImg} width="80%" />
                </Col>
              </Row>
            </div>
          </div>

          <div className="margin-top-30">
            <h1>
              CED Coating For {" "}
              <span className="featurette-heading text-muted">
                Furniture and Accessories
              </span>
            </h1>
            <h6>
              Our CED coating is ideal for metal furniture, furniture parts and
              accessories both indoors and outdoor. Whether used for couches,
              chairs and tables inside the house or office and garden furniture,
              guaranteed long life of furniture and scratch and rust resistance
              with smooth finishing.
            </h6>

            <div className="margin-top-30">
              <Row>
                <Col md={4}>
                  <Image src={tableImg} width="80%" />
                </Col>
                <Col md={4}>
                  <Image src={hingesImg} width="80%" />
                </Col>
                <Col md={4}>
                  <Image src={fastnersImg} width="80%" />
                </Col>
                <Col md={4}>
                  <Image src={part1Img} width="80%" />
                </Col>
                <Col md={4}>
                  <Image src={bedImg} width="80%" />
                </Col>
              </Row>
            </div>
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

export default Product;
