/** @format */

import { FC, JSXElementConstructor, memo } from "react";
import { Villain } from "../models/Villain";
type VillainRowProps = {
  villain: Villain;
};

const VillainRow: FC<VillainRowProps> = ({ villain }) => {
  return (
    <div>
      <div className="m-6 bg-purple-300 border-2 border-black sm:mx-60 sm:flex">
        <div>
          <img className="h-80 w-80" src={villain.images.md} alt="" />
        </div>
        <div className="ml-4">
          <p className="text-3xl font-bold text-center text-red-500">
            {villain.biography.publisher}
          </p>
          <p className="text-2xl font-semibold text-center text-white">
            {villain.name}
          </p>
          <p className="mt-4 font-medium text-md">
            Race- {villain.appearance.race} {villain.appearance.gender}
          </p>
          <p className="font-medium text-md">
            Real Name - {villain.biography.fullName}
          </p>
          <p className="font-medium text-md">
            Profession- {villain.work.occupation}
          </p>
          <p className="mt-6 text-lg font-medium text-center">Power-Stats</p>
          <div className="text-center">
            <div className="space-x-4">
              <span className="text-sm font-medium">
                Combat- {villain.powerstats.combat}
              </span>
              <span className="text-sm font-medium">
                Durability- {villain.powerstats.durability}
              </span>
            </div>
            <div className="space-x-4">
              <span className="text-sm font-medium">
                Intelligence- {villain.powerstats.intelligence}
              </span>
              <span className="text-sm font-medium">
                Power- {villain.powerstats.power}
              </span>
            </div>
            <div className="space-x-4">
              <span className="text-sm font-medium">
                Speed- {villain.powerstats.speed}
              </span>
              <span className="text-sm font-medium">
                Strength- {villain.powerstats.strength}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VillainRow.defaultProps = {};

export default memo(VillainRow);
