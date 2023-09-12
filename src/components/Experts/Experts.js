import "./Experts.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Expert1 from "../../img/expert1.png";
import Expert2 from "../../img/expert2.png";
import Expert3 from "../../img/expert3.png";
import Expert4 from "../../img/expert4.png";
import Expert5 from "../../img/expert5.png";

function Experts() {
  const [t, i18n] = useTranslation("global");

  return (
    <Container fluid id="experts">
      <Container>
        <Row className="justify-content-md-center">
          <Col className="experts-text" lg="6">
            <h5>{t("experts.h5")}</h5>
            <h1>{t("experts.h1")}</h1>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="experts-item" md="6" lg="4">
            <img className="img-fluid mb-3" src={Expert1}></img>
            <h4>{t("experts.team-1")}</h4>
            <p>{t("experts.position-1")}</p>
          </Col>
          <Col className="experts-item" md="6" lg="4">
            <img className="img-fluid mb-3" src={Expert2}></img>
            <h4>{t("experts.team-2")}</h4>
            <p>{t("experts.position-2")}</p>
          </Col>
          <Col className="experts-item" md="6" lg="4">
            <img className="img-fluid mb-3" src={Expert3}></img>
            <h4>{t("experts.team-3")}</h4>
            <p>{t("experts.position-3")}</p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="experts-item" lg={{ span: 4, offset: 2 }}>
            <img className="img-fluid mb-3" src={Expert4}></img>
            <h4>{t("experts.team-4")}</h4>
            <p>{t("experts.position-4")}</p>
          </Col>
          <Col className="experts-item" lg="4">
            <img className="img-fluid mb-3" src={Expert5}></img>
            <h4>{t("experts.team-5")}</h4>
            <p>{t("experts.position-5")}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experts;
