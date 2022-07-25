/** @format */

import { FC, memo } from "react";
import { Link } from "react-router-dom";
type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  return (
    <div className="sticky top-0 z-50">
      <div className="justify-between pt-6 text-center bg-black sm:h-20 sm:flex sm:px-40 items-centre">
        <Link to="/home">
          <h2 className="text-2xl text-white semibold">Home</h2>
        </Link>
        <Link to="/heroes">
          <h2 className="text-3xl font-extrabold text-green-600">
            SuperHeroes
          </h2>
        </Link>
        <Link to="/villains">
          <h2 className="text-3xl font-extrabold text-purple-600">
            SuperVillains
          </h2>
        </Link>
      </div>
    </div>
  );
};

NavBar.defaultProps = {};

export default memo(NavBar);
