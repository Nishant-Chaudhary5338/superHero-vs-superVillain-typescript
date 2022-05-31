/** @format */

export type Villain = {
  name: string;
  id: number;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  biography: {
    fullName: string;
    publisher: string;
  };
  images: {
    md: string;
  };
  work: {
    occupation: string;
  };
  appearance: {
    gender: string;
    race: string;
  };
};
