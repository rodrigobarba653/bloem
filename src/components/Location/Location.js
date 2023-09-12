import "./Location.css";
import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Pure from "../Pure/Pure";
import Ican from "../Ican/Ican";
import Grow from "../Grow/Grow";
import Life from "../Life/Life";
import Sosteli from "../Sosteli/Sosteli";
import NorthAmerica from "../../img/north-america.png";
import Leaf from "../../img/leaf1.png";
import Icon1 from "../../img/item-icon-1.png";
import Icon2 from "../../img/item-icon-2.png";
import Icon3 from "../../img/item-icon-3.png";
import Icon4 from "../../img/item-icon-4.png";
import Icon5 from "../../img/item-icon-5.png";

function Location() {
  const [zoneActive, setZoneActive] = useState(1);
  const active = "item active d-flex";
  const [t, i18n] = useTranslation("global");

  return (
    <Container id="location">
      <div className="leaf-3">
        <img className="img-fluid" src={Leaf}></img>
      </div>
      <Row>
        <Col className="location-map order-2 order-lg-1" lg="6">
          {zoneActive === 1 ? <Pure /> : null}
          {zoneActive === 2 ? <Ican /> : null}
          {zoneActive === 3 ? <Grow /> : null}
          {zoneActive === 4 ? <Life /> : null}
          {zoneActive === 5 ? <Sosteli /> : null}
          <img className="img-fluid" src={NorthAmerica}></img>
        </Col>
        <Col className="location-text order-1 order-lg-2" lg="6">
          <h5>{t("location.h5")}</h5>
          <h1>{t("location.h1")}</h1>
          <p>{t("location.body")}</p>
          <Col
            onClick={() => setZoneActive(1)}
            className={zoneActive === 1 ? active : "item d-flex"}>
            <img className="img-fluid mr-4" src={Icon3}></img>
            <div className="pt-3 pl-5">
              <h4>{t("location.item-1.title")}</h4>
            </div>
          </Col>
          <Col
            onClick={() => setZoneActive(2)}
            className={zoneActive === 2 ? active : "item d-flex"}>
            <img className="img-fluid mr-4" src={Icon2}></img>
            <div className="pt-3 pl-5">
              <h4>{t("location.item-2.title")}</h4>
            </div>
          </Col>
          <Col
            onClick={() => setZoneActive(3)}
            className={zoneActive === 3 ? active : "item d-flex"}>
            <img className="img-fluid mr-4" src={Icon1}></img>
            <div className="pt-3 pl-5">
              <h4>{t("location.item-3.title")}</h4>
            </div>
          </Col>
          <Col
            onClick={() => setZoneActive(4)}
            className={zoneActive === 4 ? active : "item d-flex"}>
            <img className="img-fluid mr-4" src={Icon4}></img>
            <div className="pt-3 pl-5">
              <h4>{t("location.item-4.title")}</h4>
            </div>
          </Col>
          <Col
            onClick={() => setZoneActive(5)}
            className={zoneActive === 5 ? active : "item d-flex"}>
            <img className="img-fluid mr-4" src={Icon5}></img>
            <div className="pt-3 pl-5">
              <h4>{t("location.item-5.title")}</h4>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Location;
