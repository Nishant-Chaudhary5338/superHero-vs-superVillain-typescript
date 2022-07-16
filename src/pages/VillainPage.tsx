/** @format */

import { FC, memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FETCHED_VILLAINS_ACTION } from "../Actions/actions";
import { getVillain } from "../api";
import VillainList from "../components/VillainList";
type VillainPageProps = {};

const VillainPage: FC<VillainPageProps> = (props) => {
  const dispatch = useDispatch();
  const fetchVillain = () => {
    const token = getVillain();
    token.then((v) => {
      dispatch(FETCHED_VILLAINS_ACTION(v));
      console.log(v);
    });
  };
  useEffect(() => {
    document.body.style.backgroundImage = `url(${"https://cdn.mos.cms.futurecdn.net/WRVqmiSCwAGdKyMFEKVewa.jpg"})`;
  }, []);
  return (
    <div>
      <VillainList fetchVillain={fetchVillain}></VillainList>
    </div>
  );
};

VillainPage.defaultProps = {};

export default memo(VillainPage);
