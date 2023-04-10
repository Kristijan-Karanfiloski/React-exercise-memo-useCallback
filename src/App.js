import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showParagraph, setShowParagrpah] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP Running");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagrpah((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}> Allow toggling ! </Button>
      <Button onClick={toggleParagraphHandler}> Show Paragraph ! </Button>
    </div>
  );
}

export default App;
