import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="justify-content-center">
        <Col className="footer-copywright text-center">
          <h3>{t("footer.copyright", { year })}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
