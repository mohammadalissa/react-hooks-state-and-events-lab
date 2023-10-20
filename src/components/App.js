import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"
  const [appClass, setAppClass] = useState("App light")
  function modeInverter(currentMode) {
    if (currentMode === "App dark") {
      setAppClass("App light")
    }
    else if (currentMode === "App light")
      setAppClass("App dark")

  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => modeInverter(appClass)}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
