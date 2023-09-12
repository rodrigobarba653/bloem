import "./BioPha.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Experts from "../Experts/Experts";
import { Container, Row, Col, Card } from "react-bootstrap";
import BioPhaImg1 from "../../img/biopha-1.png";
import BioPhaImg2 from "../../img/biopha-2.png";

function BioPha() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Container id="biopha-header">
        <Row className="justify-content-center">
          <Col lg={{ span: 6 }}>
            <h1>{t("biopha.title")}</h1>
            <p>{t("biopha.body")}</p>
          </Col>
        </Row>
      </Container>

      <Experts></Experts>

      <Container id="biopha-body">
        <div fluid id="solutions-bg"></div>
        <Row>
          <Col className="" lg="6">
            <img className="img-fluid" src={BioPhaImg1}></img>
          </Col>
          <Col className="biopha-text" lg="6">
            <h1>{t("biopha.subtitle-1")}</h1>
            <p>{t("biopha.body-1")}</p>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5" id="biopha-vision">
        <Row>
          <Col className="biopha-text" lg="6">
            <h1>{t("biopha.subtitle-2")}</h1>
            <p>{t("biopha.body-2")}</p>
          </Col>
          <Col className="" lg="6">
            <img className="img-fluid" src={BioPhaImg2}></img>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BioPha;
