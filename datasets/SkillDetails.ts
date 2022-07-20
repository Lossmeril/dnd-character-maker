import { SkillId as Skills } from "./Skills"

type Skill = {
    name: string,
    description: string,
}

export const SkillDetails: { [key in Skills]: Skill } = {
    [Skills.Athletics]: {
        name: 'Atletika',
        description: "Run, you fools!"
    },

    //DEX
    [Skills.Acrobatics]: {
        name: 'Akrobacie',
        description: "Není mu nic, je mu hodně."
    },
    [Skills.SleightOfHand]: {
        name: 'Hbité prsty',
        description: ""
    },
    [Skills.Stealth]: {
        name: 'Plížení',
        description: ""
    },

    //INT
    [Skills.Arcana]: {
        name: 'Znalost magie',
        description: ""
    },
    [Skills.History]: {
        name: 'Historie',
        description: "Lemme tell you a story..."
    },
    [Skills.Investigation]: {
        name: 'Vyšetřování',
        description: ""
    },
    [Skills.Nature]: {
        name: 'Znalost přírody',
        description: ""
    },
    [Skills.Religion]: {
        name: 'Víra',
        description: ""
    },

    //WIS
    [Skills.AnimalHandling]: {
        name: 'Práce se zvířaty',
        description: ""
    },
    [Skills.Insight]: {
        name: 'Prozíravost',
        description: ""
    },
    [Skills.Medicine]: {
        name: 'Medicína',
        description: ""
    },
    [Skills.Perception]: {
        name: 'Vnímání',
        description: ""
    },
    [Skills.Survival]: {
        name: 'Přežití',
        description: ""
    },

    //CHA
    [Skills.Deception]: {
        name: 'Klamání',
        description: "Lies! Deception!"
    },
    [Skills.Intimidation]: {
        name: 'Zastrašování',
        description: ""
    },
    [Skills.Performance]: {
        name: 'Vystupování',
        description: ""
    },
    [Skills.Persuasion]: {
        name: 'Přesvědčování',
        description: ""
    },
};
