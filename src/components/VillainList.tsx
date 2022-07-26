/** @format */

import { FC, memo } from "react";
import { connect } from "react-redux";
import { FETCH_VILLAINS_ACTION } from "../actions/villains";
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
  const gettingId = () => {
    console.log("its working");
  };
  return (
    <div>
      <div className="text-center">
        <Button onClick={fetchVillain} theme="villain">
          Give me Villains
        </Button>
      </div>
      <div
        style={{
          backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/WRVqmiSCwAGdKyMFEKVewa.jpg")`,
        }}
        className="flex-wrap justify-between object-fill h-full px-10 mt-10 sm:flex"
      >
        <div className="">
          {villains.map((v) => (
            <div className="relative">
              <div className="">
                <VillainRow key={v.id} villain={v}></VillainRow>
              </div>
              <div className="absolute inset-0 flex items-center justify-center space-x-6 transition ease-in-out bg-purple-400 opacity-0 sm:mx-60 hover:opacity-100">
                <Button theme="both" onClick={gettingId}>
                  Add to favourite
                </Button>
              </div>
            </div>
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
const mapDispatchToProps = {
  fetchVillain: FETCH_VILLAINS_ACTION,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(VillainList));
