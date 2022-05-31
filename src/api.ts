/** @format */

import axios from "axios";
import { Hero } from "./models/Hero";
import { Villain } from "./models/Villain";

/** @format */
const options = {
  method: "GET",
  url: "https://superhero-search.p.rapidapi.com/api/heroes",
  headers: {
    "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    "X-RapidAPI-Key": "6aa46a3947msh16ef00bcf3c4794p1701f5jsn486f8e3b84fb",
  },
};
export const getHero = async () => {
  const responsePromise = await axios.request<Hero[]>(options);
  const marvel = responsePromise.data;
  return marvel;
};

const villain = {
  method: "GET",
  url: "https://superhero-search.p.rapidapi.com/api/villains",
  headers: {
    "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    "X-RapidAPI-Key": "6aa46a3947msh16ef00bcf3c4794p1701f5jsn486f8e3b84fb",
  },
};
export const getVillain = async () => {
  const response = await axios.request<Villain[]>(villain);
  const dc = response.data;
  return dc;
};
const value: string = "";
const searchHero = {
  method: "GET",
  url: "https://superhero-search.p.rapidapi.com/api/",
  params: { hero: `${value}` },
  headers: {
    "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    "X-RapidAPI-Key": "6aa46a3947msh16ef00bcf3c4794p1701f5jsn486f8e3b84fb",
  },
};

export const getSearchHero = async (value: string) => {
  const response = await axios.request<Hero[]>(searchHero);
  return response.data;
};
