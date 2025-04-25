import React from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

function Type() {
  const { t } = useTranslation();
  return (
    <Typewriter
      options={{
        strings: t("typewriter.strings", { returnObjects: true }),
        autoStart: true,
        loop: true,
        delay: 70,
        deleteSpeed: 35,
      }}
    />
  );
}
export default Type;
