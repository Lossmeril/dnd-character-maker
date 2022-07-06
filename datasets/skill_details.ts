import * as Skills from "./skills"

type Skill = {
    name: string
}

export const SkillDetails: { [key: string]: Skill } = {
    [Skills.Athletics]: {
        name: 'Atletika',
    },

    //DEX
    [Skills.Acrobatics]: {
        name: 'Akrobacie',
    },
    [Skills.SleightOfHand]: {
        name: 'Hbité prsty',
    },
    [Skills.Stealth]: {
        name: 'Plížení',
    },

    //INT
    [Skills.Arcana]: {
        name: 'Znalost magie',
    },
    [Skills.History]: {
        name: 'Historie',
    },
    [Skills.Investigation]: {
        name: 'Vyšetřování',
    },
    [Skills.Nature]: {
        name: 'Znalost přírody',
    },
    [Skills.Religion]: {
        name: 'Víra',
    },

    //WIS
    [Skills.AnimalHandling]: {
        name: 'Práce se zvířaty',
    },
    [Skills.Insight]: {
        name: 'Prozíravost',
    },
    [Skills.Medicine]: {
        name: 'Medicína',
    },
    [Skills.Perception]: {
        name: 'Vnímání',
    },
    [Skills.Survival]: {
        name: 'Přežití',
    },

    //CHA
    [Skills.Deception]: {
        name: 'Klamání',
    },
    [Skills.Intimidation]: {
        name: 'Zastrašování',
    },
    [Skills.Performance]: {
        name: 'Vystupování',
    },
    [Skills.Persuasion]: {
        name: 'Přesvědčování',
    },
};
