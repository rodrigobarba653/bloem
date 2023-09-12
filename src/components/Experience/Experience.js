import { BrowserRouter as Router, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./Experience.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Ex1 from "../../img/ex1.png";
import Ex2 from "../../img/ex2.png";
import Ex3 from "../../img/ex3.png";
import Ex4 from "../../img/ex4.png";
import Ex5 from "../../img/ex5.png";
import Ex6 from "../../img/ex6.png";

function Experience() {
  const [t, i18n] = useTranslation("global");

  return (
    <Container fluid id="experience">
      <Container>
        <Row className="justify-content-md-center">
          <Col className="experience-text" lg="6">
            <h5>{t("experience.h5")}</h5>
            <h1>{t("experience.h1")}</h1>
            <p>{t("experience.body")}</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="experience-item" lg="4">
            <img className="img-fluid" src={Ex1}></img>
            <h4>{t("experience.item-1.title")}</h4>
            <p>{t("experience.item-1.body")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <img className="img-fluid" src={Ex2}></img>
            <h4>{t("experience.item-2.title")}</h4>
            <p>{t("experience.item-2.body")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <img className="img-fluid" src={Ex3}></img>
            <h4>{t("experience.item-3.title")}</h4>
            <p>{t("experience.item-3.body")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <img className="img-fluid" src={Ex4}></img>
            <h4>{t("experience.item-4.title")}</h4>
            <p>{t("experience.item-4.body")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <img className="img-fluid" src={Ex5}></img>
            <h4>{t("experience.item-5.title")}</h4>
            <p>{t("experience.item-5.body")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <img className="img-fluid" src={Ex6}></img>
            <h4>{t("experience.item-6.title")}</h4>
            <p>{t("experience.item-6.body")}</p>
          </Col>
        </Row>
        <Col className="text-center">
          <HashLink
            className="nav-link"
            smooth
            to="/biopharmaceutical#biopha-header">
            <Button>{t("experience.btn")}</Button>
          </HashLink>
        </Col>
      </Container>
    </Container>
  );
}

export default Experience;
