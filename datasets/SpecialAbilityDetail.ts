import { SpecialAbilityId } from "./SpecialAbility";

type SpecialAbility = {
    name: string,
    description: string
}

export const SpecialAbilityDetails: { [key in SpecialAbilityId]: SpecialAbility } = {
    [SpecialAbilityId.WarCry]: {
        name: "Válečný pokřik",
        description: "Waaaagh"
    },
    [SpecialAbilityId.ShieldBash]: {
        name: "Útok štítem",
        description: "Smash it!"
    },
    [SpecialAbilityId.EnchantingSong]: {
        name: "Okouzlující píseň",
        description: "Hypnodancer..."
    }
}
