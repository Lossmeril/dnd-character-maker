import { RaceId as Races } from "./Races";
import { StatId as Stats } from "./Stats";

export type Race = {
    name: string
    modifiers: [Stats, number][]
}

export const RaceDetails: { [key in Races]: Race } = {
    [Races.NOT_SELECTED]: {name: "", modifiers: []},
    [Races.Human]: {
        name: 'Člověk',
        modifiers: [
            [Stats.Strength, 1],
            [Stats.Dexterity, 1],
            [Stats.Constitution, 1],
            [Stats.Intelligence, 1],
            [Stats.Wisdom, 1],
            [Stats.Charisma, 1],
        ],
    },
    [Races.Elf]: {
        name: 'Elf',
        modifiers: [
            [Stats.Dexterity, 2]
        ]
    },
    [Races.Dwarf]: {
        name: 'Trpaslík',
        modifiers: [
            [Stats.Constitution, 2]
        ],
    },
    [Races.Halfling]: {
        name: 'Pulčík',
        modifiers: [
            [Stats.Dexterity, 2],
            [Stats.Charisma, 1],
        ],
    },
    [Races.Kroll]: {
        name: 'Kroll',
        modifiers: [
            [Stats.Strength, 2],
            [Stats.Constitution, 1],
        ],
    },
};
