import { ClassId } from "./Classes";
import { AbilityId } from "./Ability";
import { SkillId } from "./Skills";
import { SpecialAbilityId } from "./SpecialAbility";

export type Class = {
  name: string;
  abilities: AbilityId[];
  availableProficiencies: SkillId[];
  availableSpecialAbilities: SpecialAbilityId[];
};

export const ClassDetails: { [key in ClassId]: Class } = {
  [ClassId.Barbarian]: {
    name: "Barbar",
    abilities: [AbilityId.Sing],
    availableProficiencies: [SkillId.History],
    availableSpecialAbilities: [SpecialAbilityId.EnchantingSong],
  },
  [ClassId.Bard]: {
    name: "Bard",
    abilities: [AbilityId.Sing],
    availableProficiencies: [SkillId.History],
    availableSpecialAbilities: [SpecialAbilityId.EnchantingSong],
  },
  [ClassId.Shaman]: {
    name: "Šaman",
    abilities: [AbilityId.Sing],
    availableProficiencies: [SkillId.History],
    availableSpecialAbilities: [SpecialAbilityId.EnchantingSong],
  },
  [ClassId.Monk]: {
    name: "Mnich",
    abilities: [AbilityId.Sing],
    availableProficiencies: [SkillId.History],
    availableSpecialAbilities: [SpecialAbilityId.EnchantingSong],
  },
  [ClassId.Warrior]: {
    name: "Válečník",
    abilities: [AbilityId.Fly],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
  },
  [ClassId.Ranger]: {
    name: "Hraničář",
    abilities: [AbilityId.Fly],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
  },
  [ClassId.Wizzard]: {
    name: "Čaroděj",
    abilities: [AbilityId.Fly],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
  },
  [ClassId.Mage]: {
    name: "Mág",
    abilities: [AbilityId.Fly],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
  },
  [ClassId.Alchemist]: {
    name: "Alchymista",
    abilities: [AbilityId.Fly],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
  },
  [ClassId.Druid]: {
    name: "Druid",
    abilities: [AbilityId.Fly],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
  },
  [ClassId.Thief]: {
    name: "Zloděj",
    abilities: [AbilityId.Fly],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
  },
  [ClassId.Witcher]: {
    name: "Vědmák",
    abilities: [AbilityId.Fly],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
  },
  [ClassId.Priest]: {
    name: "Kněz",
    abilities: [AbilityId.Fly],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
  },
  [ClassId.Inquisitor]: {
    name: "Inkvizitor",
    abilities: [AbilityId.Fly],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
  },
};
