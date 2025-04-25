import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bilicrawler from "../../Assets/Projects/bilicrawler_cropped.png";
import mcp from "../../Assets/Projects/mcp-image-processor_cropped.png";
import continuezh from "../../Assets/Projects/continue-zh_cropped.png";

function Projects() {
  const { t } = useTranslation();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("projects.title")}{" "}
          <strong className="purple">{t("projects.subtitle")}</strong>
        </h1>
        <p style={{ color: "white" }}>{t("projects.description")}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bilicrawler}
              isBlog={false}
              title="bilibili-crawler"
              descriptionKey="bilibili-crawler.fullDescription"
              ghLink="https://github.com/HYPERVAPOR/bilibili-crawler"
              demoLink="https://bilicrawler.hypervapor.cloud/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mcp}
              isBlog={false}
              title="mcp-image-processor"
              descriptionKey="mcp-image-processor.fullDescription"
              ghLink="https://github.com/HYPERVAPOR/mcp-image-processor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={continuezh}
              isBlog={false}
              title="AI Programming Solution for China-made Platforms"
              descriptionKey="continue-zh.fullDescription"
              ghLink="https://github.com/HYPERVAPOR/continue-zh"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
