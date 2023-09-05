import "./Location.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pure from "../Pure/Pure";
import Ican from "../Ican/Ican";
import Grow from "../Grow/Grow";
import Life from "../Life/Life";
import Sosteli from "../Sosteli/Sosteli";
import MapRadial from "../MapRadial/MapRadial";
import NorthAmerica from "../../img/north-america.png";

function Location() {
  const [zoneActive, setZoneActive] = useState(1);
  const [t, i18n] = useTranslation("global");

  return (
    <Container id="location">
      <Row>
        <Col className="location-map" lg="6">
          {setZoneActive(1) ? <Pure /> : null}
          {setZoneActive(2) ? <Ican /> : null}
          {setZoneActive(3) ? <Grow /> : null}
          <img className="img-fluid" src={NorthAmerica}></img>
        </Col>
        <Col className="location-text" lg="6">
          <h5>{t("location.h5")}</h5>
          <h1>{t("location.h1")}</h1>
          <p>{t("location.body")}</p>
          <Col
            onClick={() => setZoneActive(1)}
            id="pure"
            className="item item-1 active">
            <h4>{t("location.item-1.title")}</h4>
            <p>{t("location.item-1.body")}</p>
          </Col>
          <Col
            onClick={() => setZoneActive(2)}
            id="Ican"
            className="item item-2">
            <h4>{t("location.item-2.title")}</h4>
            <p>{t("location.item-2.body")}</p>
          </Col>
          <Col
            onClick={() => setZoneActive(3)}
            id="Grow"
            className="item item-3">
            <h4>{t("location.item-3.title")}</h4>
            <p>{t("location.item-3.body")}</p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Location;
