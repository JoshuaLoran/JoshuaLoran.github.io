import React from "react";
import "./App.css";
import {HashRouter} from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import {Root} from "./containers/Layout";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <ScrollToTop />
        <Root/>
      </HashRouter>
    </div>
  );
}

export default App;
