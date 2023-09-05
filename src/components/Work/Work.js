import "./Work.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AboutImg from "../../img/about-img.png";

function Work() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Container id="work-header">
        <Row className="justify-content-center">
          <Col lg={{ span: 6 }}>
            <h1>{t("work.title")}</h1>
            <p>{t("work.body")}</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <h4 className="italic">{t("work.claim")}</h4>
        </Row>
      </Container>

      <Container id="work-body">
        <Row>
          <Col className="" lg="6">
            <img className="img-fluid" src={AboutImg}></img>
          </Col>
          <Col lg="6">
            <h1>{t("work.subtitle-1")}</h1>
            <ul className="p-0">
              <li>{t("work.step-1")}</li>
              <li>{t("work.step-2")}</li>
              <li>{t("work.step-3")}</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container id="work-card">
        <Row>
          <Col lg="4">
            <Card xs="12">{t("work.col-1")}</Card>
          </Col>
          <Col lg="4">
            <Card xs="12">{t("work.col-2")}</Card>
          </Col>
          <Col lg="4">
            <Card xs="12">{t("work.col-3")}</Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="">
          <Col lg="6">
            <h1>{t("work.subtitle-1")}</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="experience-item" lg="4">
            <h5>{t("work.team.team-1")}</h5>
            <p>{t("work.team.position-1")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <h5>{t("work.team.team-2")}</h5>
            <p>{t("work.team.position-2")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <h5>{t("work.team.team-3")}</h5>
            <p>{t("work.team.position-3")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <h5>{t("work.team.team-4")}</h5>
            <p>{t("work.team.position-4")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <h5>{t("work.team.team-5")}</h5>
            <p>{t("work.team.position-5")}</p>
          </Col>
          <Col className="experience-item" lg="4">
            <h5>{t("work.team.team-6")}</h5>
            <p>{t("work.team.position-6")}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Work;
