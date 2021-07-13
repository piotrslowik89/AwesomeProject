import React, { createContext, useContext } from 'react';
import { IntlProvider } from 'react-intl';

import { getMessages } from './utils';
import { LANGUAGES, LangContextName } from './constans';

export const LangContext = createContext();
LangContext.displayName = LangContextName;

export function LangModeProvider(props) {
  console.log('props', props);

  const [lang, setLang] = React.useState(LANGUAGES.PL);

  function switchLang(newLang) {
    setLang(newLang);
  }
  const value = [lang, switchLang];

  console.log('props', props);

  return <LangContext.Provider value={value} {...props} />;
}

export default function LangWrapper({ children }) {
  const [lang] = useContext(LangContext);

  return (
    <IntlProvider
      locale={lang}
      defaultLocale={LANGUAGES.ENG}
      messages={getMessages(lang)}>
      {children}
    </IntlProvider>
  );
}
