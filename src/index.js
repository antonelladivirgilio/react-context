import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Components
import Panel from "./components/Panel";
import { LanguageContext } from "./context/LanguageContext";

// Languages
import en from "./locales/en.json";

const App = () => {
  const [currentLocale, setCurrentLocale] = useState(en);

  return (
    <LanguageContext.Provider value={{ currentLocale, setCurrentLocale }}>
      <Panel />
    </LanguageContext.Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
