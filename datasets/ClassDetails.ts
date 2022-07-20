import { ClassId } from "./Classes";
import { AbilityId } from "./Ability";
import { SkillId } from "./Skills";

export type Class = {
    name: string,
    abilities: AbilityId[],
    availableProficiencies: SkillId[]
}

export const ClassDetails: { [key in ClassId]: Class } = {
    [ClassId.Warrior]: {
        name: "Válečník",
        abilities: [AbilityId.Fly],
        availableProficiencies: [
            SkillId.Athletics,
            SkillId.Acrobatics,
        ]
    },
    [ClassId.Bard]: {
        name: "Bard",
        abilities: [AbilityId.Sing],
        availableProficiencies: [
            SkillId.History,
        ]
    }
}
