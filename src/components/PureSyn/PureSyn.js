import "./PureSyn.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Ps1 from "../../img/ps-1.png";
import Ps2 from "../../img/ps-2.png";
import Pr1 from "../../img/pr-1.png";
import Pr2 from "../../img/pr-2.png";
import Pr3 from "../../img/pr-3.png";
import Pr4 from "../../img/pr-4.png";
import Pr5 from "../../img/pr-5.png";
import Pr6 from "../../img/pr-6.png";

function PureSyn() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Container id="puresyn-header">
        <Row className="justify-content-center">
          <Col lg={{ span: 8 }}>
            <h1 className="">{t("puresyn.title")}</h1>
          </Col>
        </Row>
      </Container>

      <Container id="biopha-body">
        <Row>
          <Col className="" lg="6">
            <img className="img-fluid" src={Ps1}></img>
          </Col>
          <Col className="puresyn-text" lg="6">
            <h1>{t("puresyn.subtitle1")}</h1>
            <p>{t("puresyn.p1")}</p>
          </Col>
        </Row>
      </Container>

      <Container id="puresyn-vision">
        <Row>
          <Col className="puresyn-text-brand" lg="6">
            <p>{t("puresyn.p2")}</p>
          </Col>
          <Col lg="6">
            <img className="img-fluid" src={Ps2}></img>
          </Col>
        </Row>
      </Container>

      <Container fluid id="puresyn-brands">
        <Container>
          <Row>
            <Col className="mb-5">
              <h1>{t("puresyn.subtitle2")}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="mb-5" lg="4">
              <img className="img-fluid mb-3" src={Pr4}></img>
              <h4>{t("puresyn.brand1.h4")}</h4>
              <p>{t("puresyn.brand1.p")}</p>
            </Col>
            <Col className="mb-5" lg="4">
              <img className="img-fluid mb-3" src={Pr6}></img>
              <h4>{t("puresyn.brand2.h4")}</h4>
              <p>{t("puresyn.brand2.p")}</p>
            </Col>
            <Col className="mb-5" lg="4">
              <img className="img-fluid mb-3" src={Pr5}></img>
              <h4>{t("puresyn.brand3.h4")}</h4>
              <p>{t("puresyn.brand3.p")}</p>
            </Col>
            <Col className="mb-5" lg="4">
              <img className="img-fluid mb-3" src={Pr3}></img>
              <h4>{t("puresyn.brand4.h4")}</h4>
              <p>{t("puresyn.brand4.p")}</p>
            </Col>
            <Col className="mb-5" lg="4">
              <img className="img-fluid mb-3" src={Pr1}></img>
              <h4>{t("puresyn.brand5.h4")}</h4>
              <p>{t("puresyn.brand5.p")}</p>
            </Col>
            <Col className="mb-5" lg="4">
              <img className="img-fluid mb-3" src={Pr2}></img>
              <h4>{t("puresyn.brand6.h4")}</h4>
              <p>{t("puresyn.brand6.p")}</p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container id="puresyn-wellness">
        <div fluid id="solutions-bg"></div>
        <Row>
          <Col lg="6">
            <h1>{t("puresyn.wellness.subtitle2")}</h1>
            <p>{t("puresyn.wellness.p2")}</p>
          </Col>
          <Col lg="6">
            <h1>{t("puresyn.wellness.subtitle3")}</h1>
            <p>{t("puresyn.wellness.p3")}</p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <p>{t("puresyn.wellness.p3")}</p>
            <p>{t("puresyn.wellness.p4")}</p>
            <ul className="px-0">
              <li>- {t("puresyn.wellness.bullet1")}</li>
              <li>- {t("puresyn.wellness.bullet2")}</li>
              <li>- {t("puresyn.wellness.bullet3")}</li>
            </ul>
          </Col>
        </Row>
        <Col className="mx-auto mt-5" lg="8">
          <h4 className="italic">{t("puresyn.wellness.claim")}</h4>
        </Col>
      </Container>
    </>
  );
}

export default PureSyn;
