import "./AboutUs.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import AboutImg from "../../img/about-img.png";
import Circle from "../../img/circle.png";

function AboutUs() {
  const [t, i18n] = useTranslation("global");

  return (
    <Container id="about">
      <div className="circle-1">
        <img className="img-fluid" src={Circle}></img>
      </div>
      <Row>
        <Col className="order-lg-1 order-2" lg="6">
          <img className="img-fluid" src={AboutImg}></img>
        </Col>
        <Col className="order-lg-2 order-1 about-text mb-5 mb-lg-0" lg="6">
          <h5>{t("about-us.h5")}</h5>
          <h1>{t("about-us.h1")}</h1>
          <p>{t("about-us.body.p1")}</p>
          <p>{t("about-us.body.p2")}</p>
          <Button>{t("about-us.btn")}</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
