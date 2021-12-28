import React from "react";
import "./App.css";
import {HashRouter} from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import {Root} from "./containers/Layout";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <HashRouter basename="/">
          <ScrollToTop />
          <Root/>
        </HashRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
