import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

import en from "../../locales/en.json";
import es from "../../locales/es.json";
import ja from "../../locales/ja.json";

const ContentPanel = () => {
  let { currentLocale, setCurrentLocale } = useContext(LanguageContext);

  const handleLanguageChange = selectedLanguage => event => {
    setCurrentLocale(selectedLanguage);
  };

  return (
    <>
      {currentLocale.text}
      <button onClick={handleLanguageChange(en)}>ingles</button>
      <button onClick={handleLanguageChange(es)}>español</button>
      <button onClick={handleLanguageChange(ja)}>japonés</button>
    </>
  );
};

export default ContentPanel;
