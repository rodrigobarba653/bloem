import { BrowserRouter as Router, Link } from "react-router-dom";

import "./MainNav.css";
import logo from "../../img/logo.png";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function MainNav() {
  const [t, i18n] = useTranslation("global");

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          <Nav className="ml-auto mr-3">
            <Link className="nav-link" to="/about">
              {t("nav.about-us")}
            </Link>
            <Link className="nav-link" to="/about">
              {t("nav.experience")}
            </Link>
            <Link className="nav-link" to="/about">
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
            href="#"
          >
            ES
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => i18n.changeLanguage("en")}
            href="#"
          >
            EN
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default MainNav;
