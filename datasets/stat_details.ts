import * as Stats from './stats';
import * as Skills from './skills';

type Stat = {
    name: string,
    skills: string[]
}

export const StatDetails: { [key: string]: Stat } = {
    [Stats.Strength]: {
        name: 'Síla',
        skills: [
            Skills.Athletics
        ],
    },
    [Stats.Dexterity]: {
        name: 'Obratnost',
        skills: [
            Skills.Acrobatics,
            Skills.SleightOfHand,
            Skills.Stealth,
        ],
    },
    [Stats.Constitution]: {
        name: 'Odolnost',
        skills: [],
    },
    [Stats.Intelligence]: {
        name: 'Inteligence',
        skills: [
            Skills.Arcana,
            Skills.History,
            Skills.Investigation,
            Skills.Nature,
            Skills.Religion,
        ],
    },
    [Stats.Wisdom]: {
        name: 'Moudrost',
        skills: [
            Skills.AnimalHandling,
            Skills.Insight,
            Skills.Medicine,
            Skills.Perception,
            Skills.Survival,
        ],
    },
    [Stats.Charisma]: {
        name: 'Charisma',
        skills: [
            Skills.Deception,
            Skills.Intimidation,
            Skills.Performance,
            Skills.Persuasion,
        ],
    },
};
