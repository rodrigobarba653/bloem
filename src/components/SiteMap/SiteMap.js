import "./SiteMap.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function SiteMap() {
  const [t, i18n] = useTranslation("global");

  return (
    <Container fluid id="site-map">
      <Container>
        <Row>
          <Col lg="3">
            <h6>{t("site-map.h6")}</h6>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default SiteMap;
