/** @format */

import { FC, memo } from "react";
import { connect } from "react-redux";
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
          {heroes.map((h) => (
            <HeroRow key={h.id} hero={h}></HeroRow>
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

export default connect(mapStateToProps)(memo(HeroList));
