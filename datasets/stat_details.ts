import { StatName } from './stats';
import { SkillName } from './skills';

type Stat = {
    name: string,
    skills: SkillName[]
}

export const StatDetails: { [key in StatName]: Stat } = {
    [StatName.Strength]: {
        name: 'Síla',
        skills: [
            SkillName.Athletics
        ],
    },
    [StatName.Dexterity]: {
        name: 'Obratnost',
        skills: [
            SkillName.Acrobatics,
            SkillName.SleightOfHand,
            SkillName.Stealth,
        ],
    },
    [StatName.Constitution]: {
        name: 'Odolnost',
        skills: [],
    },
    [StatName.Intelligence]: {
        name: 'Inteligence',
        skills: [
            SkillName.Arcana,
            SkillName.History,
            SkillName.Investigation,
            SkillName.Nature,
            SkillName.Religion,
        ],
    },
    [StatName.Wisdom]: {
        name: 'Moudrost',
        skills: [
            SkillName.AnimalHandling,
            SkillName.Insight,
            SkillName.Medicine,
            SkillName.Perception,
            SkillName.Survival,
        ],
    },
    [StatName.Charisma]: {
        name: 'Charisma',
        skills: [
            SkillName.Deception,
            SkillName.Intimidation,
            SkillName.Performance,
            SkillName.Persuasion,
        ],
    },
};
