/** @format */

import { FC, memo } from "react";
import { connect } from "react-redux";
import { Villain } from "../models/Villain";
import { villaintypeSelector } from "../selector";
import { State } from "../store";
import Button from "./Button";
import VillainRow from "./VillainRow";
type VillainListProps = {
  villains: Villain[];
  fetchVillain: () => void;
};

const VillainList: FC<VillainListProps> = ({ villains, fetchVillain }) => {
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
          {villains.map((v) => (
            <VillainRow key={v.id} villain={v}></VillainRow>
          ))}
        </div>
      </div>
    </div>
  );
};

VillainList.defaultProps = {};
const mapStateToProps = (s: State) => ({
  villains: villaintypeSelector(s),
});

export default connect(mapStateToProps)(memo(VillainList));
