import "./App.scss";
import DarkModeSwitch from "./components/switch/switch";
import Navbar from "./components/navbar/navbar";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
<<<<<<< HEAD
import React,{useState,useRef} from "react";

function App() {
 const [state, setID] = useState("light")
 const page1Ref = useRef(null)
 const page2Ref = useRef(null)
 const page3Ref = useRef(null)
=======
import React,{useState} from "react";

function App() {
 const [state, setID] = useState("light")
>>>>>>> a6832cea78bbf91d9698cf199b307a0f490cdcda
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
        <Page1 ref={page1Ref}/>
        <Page2 ref={page2Ref}/>
        <Page3 ref={page3Ref} />
        <Navbar refs={[page1Ref,page2Ref,page3Ref]}/>
    </div>
  );
}

export default App;
