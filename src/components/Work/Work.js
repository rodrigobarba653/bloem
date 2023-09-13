import "./Work.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import WorkImg1 from "../../img/work1.png";
import WorkCardImg1 from "../../img/work-card1.jpg";
import WorkCardImg2 from "../../img/work-card2.jpg";
import WorkCardImg3 from "../../img/work-card3.jpg";
import Mgmt1 from "../../img/mgmt-1.png";
import Mgmt2 from "../../img/mgmt-2.png";
import Mgmt3 from "../../img/mgmt-3.png";
import Mgmt4 from "../../img/mgmt-4.png";
import Mgmt5 from "../../img/mgmt-5.png";
import Mgmt6 from "../../img/mgmt-6.png";
import Mgmt7 from "../../img/mgmt-7.png";
import Mgmt8 from "../../img/mgmt-8.png";
import Circle from "../../img/circle.png";

function Work() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Container id="work-header">
        <div className="circle-1">
          <img className="img-fluid" src={Circle}></img>
        </div>
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
          <Col className="mb-5" lg="6">
            <img className="img-fluid" src={WorkImg1}></img>
          </Col>
          <Col className="work-text" lg="6">
            <h1>{t("work.subtitle-1")}</h1>
            <ul className="p-0 list-group-numbered">
              <li className="list-group-item d-flex align-items-start">
                {t("work.step-1")}
              </li>
              <li className="list-group-item d-flex align-items-start">
                {t("work.step-2")}
              </li>
              <li className="list-group-item d-flex align-items-start">
                {t("work.step-3")}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container id="work-card">
        <h1 className="mb-5">{t("work.subtitle-2")}</h1>
        <Row>
          <Col lg="4">
            <Card xs="12">
              <Col className="card-img">
                <img className="" src={WorkCardImg1}></img>
              </Col>
              <Col className="card-body"> {t("work.col-1")}</Col>
            </Card>
          </Col>
          <Col lg="4">
            <Card xs="12">
              <Col className="card-img">
                <img className="" src={WorkCardImg2}></img>
              </Col>
              <Col className="card-body"> {t("work.col-2")}</Col>
            </Card>
          </Col>
          <Col lg="4">
            <Card xs="12">
              <Col className="card-img">
                <img className="" src={WorkCardImg3}></img>
              </Col>
              <Col className="card-body"> {t("work.col-3")}</Col>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5">
        <div className="circle-2">
          <img className="img-fluid" src={Circle}></img>
        </div>
        <Row className="">
          <Col lg="6">
            <h1>{t("work.subtitle-3")}</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="experience-item" xs="6" lg="3">
            <img className="img-fluid mb-3" src={Mgmt1}></img>
            <h5>{t("work.team.team-1")}</h5>
            <p>{t("work.team.position-1")}</p>
          </Col>
          <Col className="experience-item" xs="6" lg="3">
            <img className="img-fluid mb-3" src={Mgmt6}></img>
            <h5>{t("work.team.team-2")}</h5>
            <p>{t("work.team.position-2")}</p>
          </Col>
          <Col className="experience-item" xs="6" lg="3">
            <img className="img-fluid mb-3" src={Mgmt2}></img>
            <h5>{t("work.team.team-3")}</h5>
            <p>{t("work.team.position-3")}</p>
          </Col>
          <Col className="experience-item" xs="6" lg="3">
            <img className="img-fluid mb-3" src={Mgmt7}></img>
            <h5>{t("work.team.team-4")}</h5>
            <p>{t("work.team.position-4")}</p>
          </Col>
          <Col className="experience-item" xs="6" lg="3">
            <img className="img-fluid mb-3" src={Mgmt3}></img>
            <h5>{t("work.team.team-5")}</h5>
            <p>{t("work.team.position-5")}</p>
          </Col>
          <Col className="experience-item" xs="6" lg="3">
            <img className="img-fluid mb-3" src={Mgmt8}></img>
            <h5>{t("work.team.team-6")}</h5>
            <p>{t("work.team.position-6")}</p>
          </Col>
          <Col className="experience-item" xs="6" lg="3">
            <img className="img-fluid mb-3" src={Mgmt5}></img>
            <h5>{t("work.team.team-7")}</h5>
            <p>{t("work.team.position-7")}</p>
          </Col>
          <Col className="experience-item" xs="6" lg="3">
            <img className="img-fluid mb-3" src={Mgmt4}></img>
            <h5>{t("work.team.team-8")}</h5>
            <p>{t("work.team.position-8")}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Work;
