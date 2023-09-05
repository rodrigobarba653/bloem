import "./Experience.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            <h4>{t("experience.item-1.title")}</h4>
            <p>{t("experience.item-1.body")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <h4>{t("experience.item-2.title")}</h4>
            <p>{t("experience.item-2.body")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <h4>{t("experience.item-3.title")}</h4>
            <p>{t("experience.item-3.body")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <h4>{t("experience.item-4.title")}</h4>
            <p>{t("experience.item-4.body")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <h4>{t("experience.item-5.title")}</h4>
            <p>{t("experience.item-5.body")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <h4>{t("experience.item-6.title")}</h4>
            <p>{t("experience.item-6.body")}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
