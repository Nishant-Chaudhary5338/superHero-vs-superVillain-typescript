/** @format */

import { FC, memo, useEffect } from "react";
type HomePageProps = {};

const HomePage: FC<HomePageProps> = (props) => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${"https://staticg.sportskeeda.com/editor/2022/02/943f6-16451169486556.png"})`;
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url("https://staticg.sportskeeda.com/editor/2022/02/943f6-16451169486556.png")`,
      }}
      className="flex-wrap justify-between object-fill h-full px-10 mt-10 sm:flex"
    ></div>
  );
};

HomePage.defaultProps = {};

export default memo(HomePage);
