/** @format */

import { FC, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCHED_HEROES_ACTION } from "../actions/heroes";
import { getHero } from "../api";
import HeroList from "../components/HeroList";

type HeroPageProps = {};

const HeroPage: FC<HeroPageProps> = () => {
  /* const dispatch = useDispatch();

  const fetchHero = () => {
    const token = getHero();
    token.then((h) => {
      dispatch(FETCHED_HEROES_ACTION(h));
      console.log(h);
    });
  };*/

  useEffect(() => {
    document.body.style.backgroundImage = `url(${"https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"})`;
  }, []);

  return (
    <div>
      <HeroList></HeroList>
    </div>
  );
};

HeroPage.defaultProps = {};

export default memo(HeroPage);
