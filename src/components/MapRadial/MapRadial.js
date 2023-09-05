import "./MapRadial.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";

function MapRadial() {
  const [t, i18n] = useTranslation("global");

  return (
    <Col className="outter-radial">
      <Col className="inner-radial"></Col>
    </Col>
  );
}

export default MapRadial;
