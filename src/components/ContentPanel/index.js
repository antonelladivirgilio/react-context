import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

// Languages JSON
import en from "../../locales/en.json";
import es from "../../locales/es.json";
import ja from "../../locales/ja.json";

// Languages images
import jaFlag from "../../assets/images/japan.png";
import enFlag from "../../assets/images/united-kingdom.png";
import esFlag from "../../assets/images/spain.png";

const ContentPanel = () => {
  let { currentLocale, setCurrentLocale } = useContext(LanguageContext);

  const handleLanguageChange = selectedLanguage => event => {
    setCurrentLocale(selectedLanguage);
  };

  return (
    <>
      <div className="language-container">
        <button onClick={handleLanguageChange(en)} className="flag-container">
          <img src={enFlag} alt={"english language"} className="flag-image" />
        </button>
        <button onClick={handleLanguageChange(es)} className="flag-container">
          <img src={esFlag} alt={"spanish language"} className="flag-image" />
        </button>
        <button onClick={handleLanguageChange(ja)} className="flag-container">
          <img src={jaFlag} alt={"japanese language"} className="flag-image" />
        </button>
      </div>
      <div className="content-container">{currentLocale.text}</div>
      <style>{`
        .language-container,
        .content-container {
          text-align: center;
        }

        .content-container {
          margin: 40px 0 0;
          font-size: 30px;
          font-family: 'Kosugi Maru', sans-serif;
        }

        .flag-container {
          background: none;
          border: none;
          cursor: pointer;
        }

        .flag-image {
          width: 50px;
        }
      `}</style>
    </>
  );
};

export default ContentPanel;
