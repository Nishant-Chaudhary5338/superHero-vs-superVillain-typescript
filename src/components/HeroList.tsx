/** @format */

import { FC, memo } from "react";
import { connect } from "react-redux";
import { FETCH_HEROES_ACTION } from "../actions/heroes";
import { Hero } from "../models/Hero";
import { herotypesSelector } from "../selector";
import { State } from "../store";
import Button from "./Button";
import HeroRow from "./HeroRow";
type HeroListProps = {
  heroes: Hero[];
  fetchHero: () => void;
};

const HeroList: FC<HeroListProps> = ({ heroes, fetchHero }) => {
  return (
    <div>
      <div className="text-center">
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
        <div className="">
          {heroes.map((h) => (
            <div className="relative">
              <div className="hover:opacity-0">
                <HeroRow key={h.id} hero={h}></HeroRow>
              </div>
              <div className="absolute inset-0 flex items-center justify-center space-x-6 transition ease-in-out bg-green-300 opacity-0 sm:mx-60 hover:opacity-100">
                <Button theme="both">Add to favourite</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

HeroList.defaultProps = {};

const mapStateToProps = (s: State) => ({
  heroes: herotypesSelector(s),
});
const mapper = {
  fetchHero: FETCH_HEROES_ACTION,
};

export default connect(mapStateToProps, mapper)(memo(HeroList));
