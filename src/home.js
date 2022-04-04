import "./App.scss";
import DarkModeSwitch from "./components/switch/switch";
import Navbar from "./components/navbar/navbar";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import React,{useState} from "react";

function App() {
 const [state, setID] = useState("light")
 function toggle () {
   if (state == "light"){
     setID("dark")
   }
   else{
     setID("light")
   }
 }
  return (
    <div className="App" id={state}>
      <div onClick={toggle}  className="switch"><DarkModeSwitch /></div>
        <Page1 />
        <Page2 />
        <Page3 />
        <Navbar/>
    </div>
  );
}

export default App;
