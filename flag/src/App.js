import React, { useState } from "react";
import "./App.css";
const App = () => {
  const flagDictionary = {
    "🏁": "Chequered Flag",
    "🚩": "Triangular Flag",
    "🎌": "Crossed Flags",
    "🏴": "Black Flag",
    "🏳️": "White Flag",
    "🏳️‍🌈": "Rainbow Flag",
    "🏳️‍⚧️": "Transgender Flag",
    "🏴‍☠️": "Pirate Flag",
  };
  const flagDictionaryArr = Object.keys(flagDictionary);

  const [meaning, setMeaning] = useState("");
  function onChangeHandler(event) {
    let userInput = event.target.value;
    if (flagDictionary[userInput] === undefined) {
      flagDictionary[userInput] = "We don't have this in our database";
    }
    setMeaning(flagDictionary[userInput]);
  }

  function clickHandler(flag) {
    setMeaning(flagDictionary[flag]);
  }
  return (
    <div className="container">
      <h1 className="container_head">Flag Identifier:</h1>
      <input className="container_input" onChange={onChangeHandler}></input>
      <div className="container_meaning">{meaning}</div>
      <div className="container_common_head">Flags we generally know :</div>
      <div className="container_common_flags">
        {flagDictionaryArr.map((item, index) => {
          return (
            <span key={index} onClick={() => clickHandler(item)}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default App;
