import "./GrowMate.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Experts from "../Experts/Experts";
import { Container, Row, Col, Card } from "react-bootstrap";
import Grow1 from "../../img/grow-1.png";
import Grow2 from "../../img/grow-2.png";

function GrowMate() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Container id="puresyn-header">
        <Row className="justify-content-center">
          <Col lg={{ span: 8 }}>
            <h1>{t("puresyn.growmate.title")}</h1>
            <p>{t("puresyn.growmate.p1")}</p>
            <p>{t("puresyn.growmate.p2")}</p>
          </Col>
        </Row>
      </Container>

      <Container id="biopha-body">
        <Row>
          <Col className="" lg="6">
            <img className="img-fluid" src={Grow1}></img>
          </Col>
          <Col className="puresyn-text" lg="6">
            <h1>{t("puresyn.growmate.subtitle1")}</h1>
            <p>{t("puresyn.growmate.p3")}</p>
            <p>{t("puresyn.growmate.p4")}</p>
            <ul className="px-0">
              <li>- {t("puresyn.growmate.bullet1")}</li>
              <li>- {t("puresyn.growmate.bullet2")}</li>
              <li>- {t("puresyn.growmate.bullet3")}</li>
              <li>- {t("puresyn.growmate.bullet4")}</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container id="puresyn-plant">
        <Row>
          <Col className="puresyn-text-brand" lg="6">
            <h1>{t("puresyn.growmate.subtitle2")}</h1>
            <p>{t("puresyn.growmate.p5")}</p>
            <p>{t("puresyn.growmate.p6")}</p>
            <ul className="px-0">
              <li>- {t("puresyn.growmate.bullet5")}</li>
              <li>- {t("puresyn.growmate.bullet6")}</li>
              <li>- {t("puresyn.growmate.bullet7")}</li>
              <li>- {t("puresyn.growmate.bullet8")}</li>
            </ul>
          </Col>
          <Col lg="6">
            <img className="img-fluid" src={Grow2}></img>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default GrowMate;
