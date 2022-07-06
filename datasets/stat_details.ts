import * as Stats from './stats';
import * as Skills from './skills';

type Stat = {
    name: string,
    abilities: string[]
}

export const StatDetails: { [key: string]: Stat } = {
    [Stats.Strength]: {
        name: 'Síla',
        abilities: [
            Skills.Athletics
        ],
    },
    [Stats.Dexterity]: {
        name: 'Obratnost',
        abilities: [
            Skills.Acrobatics,
            Skills.SleightOfHand,
            Skills.Stealth,
        ],
    },
    [Stats.Constitution]: {
        name: 'Odolnost',
        abilities: [],
    },
    [Stats.Intelligence]: {
        name: 'Inteligence',
        abilities: [
            Skills.Arcana,
            Skills.History,
            Skills.Investigation,
            Skills.Nature,
            Skills.Religion,
        ],
    },
    [Stats.Wisdom]: {
        name: 'Moudrost',
        abilities: [
            Skills.AnimalHandling,
            Skills.Insight,
            Skills.Medicine,
            Skills.Perception,
            Skills.Survival,
        ],
    },
    [Stats.Charisma]: {
        name: 'Charisma',
        abilities: [
            Skills.Deception,
            Skills.Intimidation,
            Skills.Performance,
            Skills.Persuasion,
        ],
    },
};
