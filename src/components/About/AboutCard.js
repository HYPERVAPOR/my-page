import React from "react";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("about.aboutCard.intro1")}{" "}
            <span className="purple">{t("about.aboutCard.name")} </span>
            {t("about.aboutCard.intro2")}{" "}
            <span className="purple"> {t("about.aboutCard.location")}</span>
            <br />
            {t("about.aboutCard.currentJob")}
            <br />
            {t("about.aboutCard.education")}
            <br />
            <br />
            {t("about.aboutCard.activitiesTitle")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("about.aboutCard.activity1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about.aboutCard.activity2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about.aboutCard.activity3")}
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            {t("about.aboutCard.quote")}
          </p>
          <footer className="blockquote-footer">
            {t("about.aboutCard.author")}
          </footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
