import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Router basename="/rahuldhiman-portfolio">
            {" "}
            {/* Add basename */}
            <Main theme={chosenTheme} />
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
