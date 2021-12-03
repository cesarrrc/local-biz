import React, { useEffect } from "react";
import "./App.css";
import Router from "./Router";
//redux 1 Import Provider

//redux 3 create store and import

import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

function App(props) {
  useEffect(() => {
    props.fetchList();
  },[]);

  return (
    //redux 2 Provider Component
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
