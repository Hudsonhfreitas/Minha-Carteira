import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import dark from "./styles/themes/dark";

const App: React.FC = () => {
  return (
      <ThemeProvider theme={dark}>
        <GlobalStyles /> 
        <Routes />
     </ThemeProvider>
  );
}

export default App;