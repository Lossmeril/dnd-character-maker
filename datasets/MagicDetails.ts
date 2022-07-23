import { StatId } from "./Stats";
import { MagicId } from "./Magic";

export type StatBased = {
  castStat: StatId;
};

export type PointBased = {
  pointName: string;
  pointsPerLevel: number;
};

export const MagicDetails: {
  [key in MagicId]: StatBased | PointBased;
} = {
  [MagicId.Intelligence]: {
    castStat: StatId.Intelligence,
  },
  [MagicId.Wisdom]: {
    castStat: StatId.Wisdom,
  },
  [MagicId.Charisma]: {
    castStat: StatId.Charisma,
  },

  [MagicId.WitcherState]: {
    pointName: "Zaklínačský stav",
    pointsPerLevel: 2,
  },
  [MagicId.Seeing]: {
    pointName: "Vidění",
    pointsPerLevel: 1,
  },
  [MagicId.Ki]: {
    pointName: "Ki",
    pointsPerLevel: 1,
  },
};
