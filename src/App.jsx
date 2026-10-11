import { useState } from "react";
import "./App.css";
import Paris from "./Components/Paris";
import Sud from "./Components/Sud";
import Smichel from "./Components/Smichel";
import Colmar from "./Components/Colmar";
import Brusl from "./Components/Brusl";
import Tools from "./Components/Tools";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
const App = () => {
  const [activePage, setActivePage] = useState("home");

  const pages = {
    home: <Home />,
    paris: <Paris />,
    sud: <Sud />,
    smichel: <Smichel />,
    colmar: <Colmar />,
    brusl: <Brusl />,
    tools: <Tools />,
  };

  const labelCn = {
    paris: "巴黎",
    sud: "普羅旺斯",
    smichel: "聖米歇爾",
    colmar: "科爾馬",
    brusl: "布魯塞爾",
    tools: "工具",
  };
  const labelFr = {
    paris: "Paris",
    sud: "Provence",
    smichel: "M. St-Michel",
    colmar: "Colmar",
    brusl: "Brussels",
    tools: "App",
  };

  return (
    <section id="center">
      <div id="header">
        <h1> 法國跳團走透透 </h1>
      </div>
      <div className="menu">
        {Object.keys(pages)
          .filter((key) => key !== "home")
          .map((key) => (
            <button key={key} onClick={() => setActivePage(key)}>
              <span className="btn-cn">{labelCn[key]}</span>
              <span className="btn-fr">{labelFr[key]}</span>
            </button>
          ))}
      </div>
      {/* {activePage && pages[activePage]} */}
      {pages[activePage]}
      <Footer />
    </section>
  );
};

export default App;
