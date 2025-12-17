import "./App.scss";
import DarkModeSwitch from "./components/switch/switch";
import Navbar from "./components/navbar/navbar";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import React, { useState, useRef } from "react";

function App() {
  const [state, setID] = useState("light");
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);

  function toggle() {
    if (state == "light") {
      setID("dark");
    } else {
      setID("light");
    }
  }
  return (
    <div className="App" id={state}>
      <div onClick={toggle} className="switch">
        <DarkModeSwitch />
      </div>
      <Page1 ref={page1Ref} />
      <Page2 ref={page2Ref} />
      <Navbar refs={[page1Ref, page2Ref]} />
    </div>
  );
}

export default App;
