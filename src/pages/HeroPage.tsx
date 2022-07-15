/** @format */

import { FC, memo, useEffect, useState } from "react";
import { getHero, getSearchHero, getVillain } from "../api";
import Button from "../components/Button";
import HeroRow from "../HeroRow";
import { Hero } from "../models/Hero";
import { Villain } from "../models/Villain";
import VillainRow from "../components/VillainRow";
type HeroPageProps = {};

const HeroPage: FC<HeroPageProps> = (props) => {
  const [displayHero, setDisplayHero] = useState<Hero[]>([]);

  const fetchHero = () => {
    const token = getHero();
    token.then((h) => {
      setDisplayHero(h);
      console.log(h);
    });
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${"https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"})`;
  }, []);

  return (
    <div>
      <div className="justify-between mt-10 sm:flex sm:mx-40">
        <Button onClick={fetchHero} theme="hero">
          Give me Heroes!!
        </Button>
      </div>
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
        }}
        className="flex-wrap justify-between object-fill h-full px-10 mt-10 sm:flex"
      >
        <div className="w-4/5 sm:w-1/2">
          {displayHero.map((h) => (
            <HeroRow hero={h}></HeroRow>
          ))}
        </div>
      </div>
    </div>
  );
};

HeroPage.defaultProps = {};

export default memo(HeroPage);
