/** @format */

import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroPage from "./pages/HeroPage";
import HomePage from "./pages/HomePage";
import VillainPage from "./pages/VillainPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="heroes" element={<HeroPage></HeroPage>}></Route>
        <Route path="villains" element={<VillainPage></VillainPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
