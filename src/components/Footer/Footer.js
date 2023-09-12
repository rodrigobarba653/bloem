import "./Footer.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AboutImg from "../../img/about-img.png";

function Footer() {
  const [t, i18n] = useTranslation("global");

  return (
    <Container id="footer">
      <Row>
        <Col lg="6">
          <h6></h6>
          <p></p>
        </Col>
        <Col lg="6"></Col>
      </Row>
    </Container>
  );
}

export default Footer;
