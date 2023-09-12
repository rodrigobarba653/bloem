import "./Header.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeaderImg from "../../img/header-img.png";

function Header() {
  const [t, i18n] = useTranslation("global");

  return (
    <Container id="header">
      <Row>
        <Col lg="6" className="header-title">
          <h1>{t("header.h1")}</h1>
          <p>{t("header.body")}</p>
          <Col className="inline-flex">
            <Button className="mr-md-4 mr-3 shadow">{t("header.btn1")}</Button>
            <Button variant="outline-primary">{t("header.btn2")}</Button>
          </Col>
        </Col>
        <Col lg="6" className="header-img">
          <img className="img-fluid" src={HeaderImg}></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
