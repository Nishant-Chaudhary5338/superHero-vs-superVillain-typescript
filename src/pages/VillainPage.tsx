/** @format */

import { FC, memo, useEffect, useState } from "react";
import { getVillain } from "../api";
import Button from "../components/Button";
import { Villain } from "../models/Villain";
import VillainRow from "../components/VillainRow";
type VillainPageProps = {};

const VillainPage: FC<VillainPageProps> = (props) => {
  const [displayVillain, setDisplayVillain] = useState<Villain[]>([]);
  const fetchVillain = () => {
    const token = getVillain();
    token.then((v) => {
      setDisplayVillain(v);
      console.log(v);
    });
  };
  useEffect(() => {
    document.body.style.backgroundImage = `url(${"https://cdn.mos.cms.futurecdn.net/WRVqmiSCwAGdKyMFEKVewa.jpg"})`;
  }, []);
  return (
    <div>
      <Button onClick={fetchVillain} theme="villain">
        Give me Villains
      </Button>
      <div
        style={{
          backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/WRVqmiSCwAGdKyMFEKVewa.jpg")`,
        }}
        className="flex-wrap justify-between object-fill h-full px-10 mt-10 sm:flex"
      >
        <div className="">
          {displayVillain.map((v) => (
            <VillainRow key={v.id} villain={v}></VillainRow>
          ))}
        </div>
      </div>
    </div>
  );
};

VillainPage.defaultProps = {};

export default memo(VillainPage);
