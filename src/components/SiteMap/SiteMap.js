import { BrowserRouter as Router, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
            <HashLink className="nav-link" to="/#about">
              {t("nav.about-us")}
            </HashLink>
            <HashLink className="nav-link" to="/#biopharmaceutical">
              {t("nav.experience")}
            </HashLink>
            <HashLink className="nav-link" to="/#location">
              {t("nav.location")}
            </HashLink>
          </Col>
          <Col className="pt-4" lg="3">
            <HashLink className="nav-link" to="/#solutionst">
              {t("nav.solutions")}
            </HashLink>
            <HashLink className="nav-link" to="/#contact">
              {t("nav.contact")}
            </HashLink>
          </Col>
          <Col lg="3">
            <h4>{t("sitemap.subtitle-2")}</h4>
            <HashLink className="nav-link" to="/about#work-header">
              {t("sitemap.pages.page-1")}
            </HashLink>
            <HashLink
              className="nav-link"
              to="/biopharmaceutical#biopha-header">
              {t("sitemap.pages.page-2")}
            </HashLink>
          </Col>
          <Col className="pt-4" lg="3">
            <HashLink className="nav-link" to="/pure-syncore#puresyn-header">
              {t("sitemap.pages.page-3")}
            </HashLink>
            <HashLink className="nav-link" to="/growmate#puresyn-header">
              {t("sitemap.pages.page-4")}
            </HashLink>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default SiteMap;
