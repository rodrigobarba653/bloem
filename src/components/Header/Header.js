import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

import "./Header.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import HeaderImg from "../../img/header-img.png";

function Header() {
  const [t, i18n] = useTranslation("global");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container id="header">
        <Row>
          <Col lg="6" className="header-title">
            <h1>{t("header.h1")}</h1>
            <p>{t("header.body")}</p>
            <Col className="inline-flex">
              <HashLink className="nav-link" smooth to="#contact">
                <Button className="mr-md-4 mr-3 shadow">
                  {t("header.btn1")}
                </Button>
              </HashLink>

              <Button onClick={handleShow} variant="outline-primary">
                {t("header.btn2")}
              </Button>
            </Col>
          </Col>
          <Col lg="6" className="header-img">
            <img className="img-fluid" src={HeaderImg}></img>
          </Col>
        </Row>
      </Container>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>VIDEO</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
