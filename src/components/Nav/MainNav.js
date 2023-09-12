import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./MainNav.css";
import logo from "../../img/logo.png";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function MainNav() {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="fixed-top">
      <Container fluid>
        <Link className="navar-brand" to="/">
          <img src={logo} />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          <Nav className="ml-auto mr-3">
            <HashLink className="nav-link" smooth to="/#about">
              {t("nav.about-us")}
            </HashLink>
            <HashLink className="nav-link" smooth to="/#experience">
              {t("nav.experience")}
            </HashLink>
            <HashLink className="nav-link" smooth to="/#location">
              {t("nav.location")}
            </HashLink>
            <HashLink className="nav-link" smooth to="/#solutions">
              {t("nav.solutions")}
            </HashLink>
            <HashLink className="nav-link" smooth to="/#contact">
              {t("nav.contact")}
            </HashLink>
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
