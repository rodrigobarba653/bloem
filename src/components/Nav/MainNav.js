import { BrowserRouter as Router, Link } from "react-router-dom";
import { useRef, useEffect } from "react";

import "./MainNav.css";
import logo from "../../img/logo.png";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function MainNav() {
  const [t, i18n] = useTranslation("global");
  const locationRef = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      left: 0,
      behavior: "smooth",
      top: ref.offsetTop,
    });
  };

  return (
    <Navbar expand="lg" className="fixed-top">
      <Container fluid>
        <Link className="navar-brand" to="/">
          <img src={logo} />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          <Nav className="ml-auto mr-3">
            <Link className="nav-link" to="/about">
              {t("nav.about-us")}
            </Link>
            <Link className="nav-link" to="/biopharmaceutical">
              {t("nav.experience")}
            </Link>
            <Link
              className="nav-link"
              to="/#location"
              onClick={() => {
                handleScroll(locationRef.current);
              }}>
              {t("nav.location")}
            </Link>
            <Link className="nav-link" to="/about">
              {t("nav.solutions")}
            </Link>
            <Link className="nav-link" to="/about">
              {t("nav.contact")}
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div>
          <Button
            className="mr-2"
            variant="outline-secondary"
            onClick={() => i18n.changeLanguage("es")}
            href="#">
            ES
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => i18n.changeLanguage("en")}
            href="#">
            EN
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default MainNav;
