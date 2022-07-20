import { ClassId } from "./Classes";
import { AbilityId } from "./Ability";
import { SkillId } from "./Skills";
import { SpecialAbilityId } from "./SpecialAbility";

export type Class = {
    name: string,
    abilities: AbilityId[],
    availableProficiencies: SkillId[],
    availableSpecialAbilities: SpecialAbilityId[]
}

export const ClassDetails: { [key in ClassId]: Class } = {
    [ClassId.Warrior]: {
        name: "Válečník",
        abilities: [AbilityId.Fly],
        availableProficiencies: [
            SkillId.Athletics,
            SkillId.Acrobatics,
        ],
        availableSpecialAbilities: [
            SpecialAbilityId.WarCry,
            SpecialAbilityId.ShieldBash
        ]
    },
    [ClassId.Bard]: {
        name: "Bard",
        abilities: [AbilityId.Sing],
        availableProficiencies: [
            SkillId.History,
        ],
        availableSpecialAbilities: [
            SpecialAbilityId.EnchantingSong
        ]
    }
}
