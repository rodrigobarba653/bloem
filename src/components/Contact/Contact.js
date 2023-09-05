import "./Contact.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function Contact() {
  const [t, i18n] = useTranslation("global");

  return (
    <Container fluid id="contact">
      <Container>
        <Row>
          <Col lg="6">
            <h6>{t("contact.h6")}</h6>
            <p>{t("contact.body")}</p>
          </Col>
          <Col lg="6">
            <Form className="flex">
              <Form.Group
                className="mb-3 col-8"
                controlId="exampleForm.ControlInput1">
                <Form.Label>{t("contact.label")}</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Button variant="outline-light">{t("contact.btn")}</Button>
            </Form>
            <small>
              {t("contact.sub-form")}
              <a href="#">{t("contact.terms")}</a> {t("contact.&")}{" "}
              <a href="#">{t("contact.privacy")}</a>.
            </small>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
