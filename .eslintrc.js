module.exports = {
  root: true,
  extends: '@react-native-community',
  // dodajemy react i react native
  plugins: ['react', 'react-native'],
  // aktywujemy jsx
  parserOptions: {
    eacmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    //  odpowiedzialna za zdefiniowanie styłów które nie zostału urzyte
    'react-native/no-unused-styles': 2,
    // wymusza ustawienie nazwy
    'react-native/split-platform-components': 2,
    // czy zawiera stylke inline
    'react-native/no-inline-styles': 2,
    //  czy zawiera literale kolorów zamiast zmiennych
    'react-native/no-color-literals': 2,
    // Tekst poza koponentem tekst
    'react-native/no-raw-text': 2,
    // czy nie przekazujemy arreya z jednym dokumentem
    'react-native/no-single-element-style-arrays': 2,
  },
};
