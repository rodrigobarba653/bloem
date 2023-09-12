import { BrowserRouter as Router, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MainNav.css";
import logo from "../../img/logo.png";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function MainNav() {
  const [t, i18n] = useTranslation("global");
  const [scrolled, setScrolled] = useState(false); // Para detectar scrolleo

  // Detectando scrolleo
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 96);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funcion para saltar a la secciones
  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
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
            <Link className="nav-link" onClick={() => goToSection("about")}>
              {t("nav.about-us")}
            </Link>
            <Link
              className="nav-link"
              onClick={() => goToSection("experience")}>
              {t("nav.experience")}
            </Link>
            <Link className="nav-link" onClick={() => goToSection("location")}>
              {t("nav.location")}
            </Link>
            <Link className="nav-link" onClick={() => goToSection("solutions")}>
              {t("nav.solutions")}
            </Link>
            <Link className="nav-link" onClick={() => goToSection("contact")}>
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
