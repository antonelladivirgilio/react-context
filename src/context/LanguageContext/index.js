import React, { createContext } from "react";

const currentLanguage = {
  language: "en"
};

export const LanguageContext = createContext(currentLanguage);
