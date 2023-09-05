import "./Grow.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import MapRadial from "../MapRadial/MapRadial";

function Grow() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Col className="location-pin grow-1">
        <MapRadial />
      </Col>
    </>
  );
}

export default Grow;
