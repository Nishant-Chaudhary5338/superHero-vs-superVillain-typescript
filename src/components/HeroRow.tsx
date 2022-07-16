/** @format */

import { FC, memo } from "react";
import { Hero } from "../models/Hero";
type HeroRowProps = { hero: Hero };

const HeroRow: FC<HeroRowProps> = ({ hero }) => {
  return (
    <div className="m-6 bg-green-300 border-2 border-black sm:flex">
      <div>
        <img className="h-80 w-80" src={hero.images.md} alt="" />
      </div>
      <div className="ml-2">
        <p className="text-3xl font-bold text-center text-red-500">
          {hero.biography.publisher}
        </p>
        <p className="text-2xl font-semibold text-center text-white">
          {hero.name}
        </p>
        <p className="mt-4 font-medium text-md">
          Race- {hero.appearance.race} {hero.appearance.gender}
        </p>
        <p className="font-medium text-md">
          Real Name - {hero.biography.fullName}
        </p>
        <p className="font-medium text-md">
          Profession- {hero.work.occupation}
        </p>
        <p className="mt-6 text-lg font-medium text-center">Power-Stats</p>
        <div className="text-center">
          <div className="space-x-4">
            <span className="text-sm font-medium">
              Combat- {hero.powerstats.combat}
            </span>
            <span className="text-sm font-medium">
              Durability- {hero.powerstats.durability}
            </span>
          </div>
          <div className="space-x-4">
            <span className="text-sm font-medium">
              Intelligence- {hero.powerstats.intelligence}
            </span>
            <span className="text-sm font-medium">
              Power- {hero.powerstats.power}
            </span>
          </div>
          <div className="space-x-4">
            <span className="text-sm font-medium">
              Speed- {hero.powerstats.speed}
            </span>
            <span className="text-sm font-medium">
              Strength- {hero.powerstats.strength}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroRow.defaultProps = {};

export default memo(HeroRow);
