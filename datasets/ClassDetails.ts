import { ClassId } from "./Classes";
import { AbilityId } from "./Ability";

export type Class = {
    name: string,
    abilities: AbilityId[]
}

export const ClassDetails: { [key in ClassId]: Class } = {
    [ClassId.Warrior]: {
        name: "Válečník",
        abilities: [AbilityId.Fly]
    },
    [ClassId.Bard]: {
        name: "Bard",
        abilities: [AbilityId.Sing]
    }
}
