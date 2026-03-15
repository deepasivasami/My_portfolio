




import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Header from "./Component/Header";
import Abouts from "./Component/Abouts";
import Skill from "./Component/Skill";
import Res from "./Component/Res";

function App() {
  return (
    <>
   <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"element={<Abouts/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/project" element={<Project />} />
        <Route path="/resume"element={<Res/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
