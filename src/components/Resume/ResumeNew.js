import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfCN from "../../Assets/../Assets/cv.pdf";
import pdfEN from "../../Assets/../Assets/cv_en.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const { t } = useTranslation();
  const [width, setWidth] = useState(1200);
  const [isEnglishCV, setIsEnglishCV] = useState(false);
  const pdf = isEnglishCV ? pdfEN : pdfCN;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md="auto">
            <Button
              variant={isEnglishCV ? "outline-primary" : "primary"}
              onClick={() => setIsEnglishCV(!isEnglishCV)}
              style={{ marginRight: "10px", maxWidth: "250px" }}
            >
              {isEnglishCV ? "中文简历" : "English Resume"}
            </Button>
          </Col>
          <Col md="auto">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;{t("resume.download")}
            </Button>
          </Col>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
