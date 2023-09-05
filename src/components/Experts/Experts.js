import "./Experts.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Experts() {
  const [t, i18n] = useTranslation("global");

  return (
    <Container fluid id="experts">
      <Container>
        <Row className="justify-content-md-center">
          <Col className="experts-text" lg="6">
            <h5>{t("experts.h5")}</h5>
            <h1>{t("experts.h1")}</h1>
            <p>{t("experts.body")}</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="experts-item" lg="4">
            <h4>{t("experts.h5")}</h4>
            <p>{t("experts.body")}</p>
          </Col>
          <Col className="experts-item" lg="4">
            <h4>{t("experts.h5")}</h4>
            <p>{t("experts.body")}</p>
          </Col>
          <Col className="experts-item" lg="4">
            <h4>{t("experts.h5")}</h4>
            <p>{t("experts.body")}</p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="experts-item" lg={{ span: 4, offset: 2 }}>
            <h4>{t("experts.h5")}</h4>
            <p>{t("experts.body")}</p>
          </Col>
          <Col className="experts-item" lg="4">
            <h4>{t("experts.h5")}</h4>
            <p>{t("experts.body")}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experts;
