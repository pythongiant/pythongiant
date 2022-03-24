import "./App.css";
import DarkModeSwitch from "./components/switch/switch";
import Navbar from "./components/navbar/navbar";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";


function App() {
  return (
    <div className="App">
      <DarkModeSwitch className="switch" />
        <Page1 />
        <Page2 />
        <Page3 />
        <Navbar/>
    </div>
  );
}

export default App;
