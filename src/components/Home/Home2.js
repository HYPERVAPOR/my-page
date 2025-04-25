import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail, AiFillPhone } from "react-icons/ai";

function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("home2.title")}{" "}
              <span className="purple"> {t("home2.introduce")} </span>{" "}
              {t("home2.myself")}
            </h1>
            <p className="home-about-body">
              {t("home2.intro2")}
              <b className="purple"> {t("home2.languages")} </b>
              <br />
              <br />
              {t("home2.interests1")} &nbsp;
              <b className="purple">{t("home2.webTech")} </b>{" "}
              {t("home2.andAlso")}{" "}
              <b className="purple">{t("home2.blockchain")}</b>
              <br />
              <br />
              {t("home2.passion")}{" "}
              <b className="purple">{t("home2.nodejs")} </b> {t("home2.and")}{" "}
              <b className="purple"> {t("home2.modernJS")}</b>
              &nbsp; {t("home2.like")}{" "}
              <b className="purple"> {t("home2.frameworks")}</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t("home2.findMe")}</h1>
            <p>
              {t("home2.connect1")}{" "}
              <span className="purple">{t("home2.connect2")} </span>
              {t("home2.connect3")}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HYPERVAPOR"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:liuzhening_roeh@163.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+8618234357464"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
