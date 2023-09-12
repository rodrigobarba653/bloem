import { BrowserRouter as Router, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./Solutions.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import PureLogo from "../../img/pure-logo.png";
import GrowLogo from "../../img/grow-logo.png";
import Leaf from "../../img/leaf2.png";

function Solutions({ solutionsRef }) {
  const [t, i18n] = useTranslation("global");

  return (
    <Container id="solutions">
      <div fluid id="solutions-bg"></div>
      <div className="leaf-2">
        <img className="img-fluid" src={Leaf}></img>
      </div>
      <Row>
        <Col className="solutions-text" lg="6">
          <h5>{t("solutions.h5")}</h5>
          <h1>{t("solutions.h1")}</h1>
        </Col>
      </Row>
      <Row className="mt-md-5">
        <Col className="solutions-brand" lg="6">
          <img className="img-fluid mb-3 mt-5" src={PureLogo}></img>
          <p>{t("solutions.brand-1.body")}</p>
          <HashLink
            className="nav-link"
            smooth
            to="/pure-syncore#puresyn-header">
            <Button>{t("solutions.btn")}</Button>
          </HashLink>
        </Col>
        <Col className="solutions-brand" lg="6">
          <img className="img-fluid mb-3 mt-5" src={GrowLogo}></img>
          <p>{t("solutions.brand-2.body")}</p>
          <HashLink className="nav-link" smooth to="/growmate#puresyn-header">
            <Button>{t("solutions.btn")}</Button>
          </HashLink>
        </Col>
      </Row>
    </Container>
  );
}

export default Solutions;
