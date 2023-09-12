import { BrowserRouter as Router, Link } from "react-router-dom";

import "./SiteMap.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function SiteMap() {
  const [t, i18n] = useTranslation("global");

  return (
    <Container fluid id="site-map">
      <Container>
        <Row>
          <Col lg="3">
            <h4>{t("sitemap.subtitle-1")}</h4>
            <Link className="nav-link" to="/about">
              {t("nav.about-us")}
            </Link>
            <Link className="nav-link" to="/biopharmaceutical">
              {t("nav.experience")}
            </Link>
            <Link className="nav-link" to="/about">
              {t("nav.location")}
            </Link>
          </Col>
          <Col className="pt-4" lg="3">
            <Link className="nav-link" to="/about">
              {t("nav.solutions")}
            </Link>
            <Link className="nav-link" to="/about">
              {t("nav.contact")}
            </Link>
          </Col>
          <Col lg="3">
            <h4>{t("sitemap.subtitle-2")}</h4>
            <Link className="nav-link" to="/about">
              {t("sitemap.pages.page-1")}
            </Link>
            <Link className="nav-link" to="/biopharmaceutical">
              {t("sitemap.pages.page-2")}
            </Link>
          </Col>
          <Col className="pt-4" lg="3">
            <Link className="nav-link" to="/about">
              {t("sitemap.pages.page-3")}
            </Link>
            <Link className="nav-link" to="/about">
              {t("sitemap.pages.page-4")}
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default SiteMap;
