import React, { useContext } from 'react';

import Home from './src/view/home/Home';

import LangProvider, { LangModeProvider } from './src/lang/LangProvider';

export default function App() {
  return (
    <LangModeProvider>
      <LangProvider>
        <Home />
      </LangProvider>
    </LangModeProvider>
  );
}
