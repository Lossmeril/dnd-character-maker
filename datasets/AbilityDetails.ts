import { AbilityId } from "./Ability";

export type Ability = {
    name: string,
    description: string
}

export const AbilityDetails: { [key in AbilityId]: Ability } = {
    [AbilityId.Fly]: {
        name: "Létání",
        description: "Fly you fool!"
    },
    [AbilityId.Sing]: {
        name: "Zpěv",
        description: "There once was a ship..."
    }
}
