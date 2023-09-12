import "./Management.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Management() {
  const [t, i18n] = useTranslation("global");

  return (
    <Container fluid id="management">
      <Container>
        <Row className="justify-content-md-center">
          <Col className="management-text" lg="6">
            <h5>{t("management.h5")}</h5>
            <h1>{t("management.h1")}</h1>
            <p>{t("management.body")}</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="management-item" lg="4">
            <h4>{t("management.h5")}</h4>
            <p>{t("management.body")}</p>
          </Col>
          <Col className="management-item" lg="4">
            <h4>{t("management.h5")}</h4>
            <p>{t("management.body")}</p>
          </Col>
          <Col className="management-item" lg="4">
            <h4>{t("management.h5")}</h4>
            <p>{t("management.body")}</p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="management-item" lg={{ span: 4, offset: 2 }}>
            <h4>{t("management.h5")}</h4>
            <p>{t("management.body")}</p>
          </Col>
          <Col className="management-item" lg="4">
            <h4>{t("management.h5")}</h4>
            <p>{t("management.body")}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Management;
