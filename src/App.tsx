import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import Simpletypes from "./Simpletypes";
import Arrays from "./Arrays";
import Object from "./Object";
import Enums from "./Enums";
import Interface from "./Interface";
import Union from "./Union";
import Function from "./Function";
import Class from "./Class";
import Generics from "./Generics";

function App() {
  return (
    <div className="App">
      <Test name="test" age={22} />
      <Test name="test1" />
      <Test name="test2" status="single" />
      <Simpletypes />
      <Arrays />
      <Object />
      <Enums />
      <Interface />
      <Union />
      <Function />
      <Class />
      <Generics />
    </div>
  );
}

export default App;
