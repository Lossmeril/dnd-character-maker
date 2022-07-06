import { StatId } from './stats';
import { SkillId } from './skills';

type Stat = {
    name: string,
    skills: SkillId[]
}

export const StatDetails: { [key in StatId]: Stat } = {
    [StatId.Strength]: {
        name: 'Síla',
        skills: [
            SkillId.Athletics
        ],
    },
    [StatId.Dexterity]: {
        name: 'Obratnost',
        skills: [
            SkillId.Acrobatics,
            SkillId.SleightOfHand,
            SkillId.Stealth,
        ],
    },
    [StatId.Constitution]: {
        name: 'Odolnost',
        skills: [],
    },
    [StatId.Intelligence]: {
        name: 'Inteligence',
        skills: [
            SkillId.Arcana,
            SkillId.History,
            SkillId.Investigation,
            SkillId.Nature,
            SkillId.Religion,
        ],
    },
    [StatId.Wisdom]: {
        name: 'Moudrost',
        skills: [
            SkillId.AnimalHandling,
            SkillId.Insight,
            SkillId.Medicine,
            SkillId.Perception,
            SkillId.Survival,
        ],
    },
    [StatId.Charisma]: {
        name: 'Charisma',
        skills: [
            SkillId.Deception,
            SkillId.Intimidation,
            SkillId.Performance,
            SkillId.Persuasion,
        ],
    },
};
