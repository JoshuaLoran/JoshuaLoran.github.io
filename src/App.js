import React from "react";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import {Root} from "./containers/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Root/>
      </BrowserRouter>
    </div>
  );
}

export default App;
