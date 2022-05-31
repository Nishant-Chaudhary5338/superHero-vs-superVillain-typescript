/** @format */

import { useState } from "react";
import HeroPage from "./HeroPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div className="justify-between pt-6 text-center bg-black sm:h-20 sm:flex sm:px-40 items-centre">
        <h2 className="text-3xl font-extrabold text-green-600">SuperHeroes</h2>
        <h2 className="text-2xl text-white semibold">v/s</h2>
        <h2 className="text-3xl font-extrabold text-purple-600">
          SuperVillains
        </h2>
      </div>
      <HeroPage></HeroPage>
    </div>
  );
}

export default App;
