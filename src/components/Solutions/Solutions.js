import "./Solutions.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Solutions() {
  const [t, i18n] = useTranslation("global");

  return (
    <Container id="solutions">
      <Row>
        <Col className="solutions-text" lg="6">
          <h5>{t("solutions.h5")}</h5>
          <h1>{t("solutions.h1")}</h1>
          <p>{t("solutions.body")}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="solutions-brand" lg="6">
          <p>{t("solutions.brand-1.body")}</p>
        </Col>
        <Col className="solutions-brand" lg="6">
          <p>{t("solutions.brand-2.body")}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Solutions;
