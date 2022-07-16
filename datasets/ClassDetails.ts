import { ClassId } from "./Classes";

export type Class = {
    name: string
}

export const ClassDetails: { [key in ClassId]: Class } = {
    [ClassId.Warrior]: {
        name: "Válečník"
    },
    [ClassId.Bard]: {
        name: "Bard"
    }
}
