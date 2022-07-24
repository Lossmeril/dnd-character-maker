import { ClassId } from './Classes';
import { AbilityId } from './Ability';
import { SkillId } from './Skills';
import { SpecialAbilityId } from './SpecialAbility';
import { MagicId } from './Magic';
import { StatId } from './Stats';

export type Class = {
  name: string;
  desc?: string;
  savingThrowProficiency: StatId[];
  abilities: AbilityId[];
  availableProficiencies: SkillId[];
  availableSpecialAbilities: SpecialAbilityId[];
  magic?: MagicId;
};

export const ClassDetails: { [key in ClassId]: Class } = {
  [ClassId.Barbarian]: {
    name: 'Barbar',
    abilities: [AbilityId.Sing],
    savingThrowProficiency: [StatId.Strength, StatId.Constitution],
    availableProficiencies: [SkillId.History],
    availableSpecialAbilities: [SpecialAbilityId.EnchantingSong],
  },
  [ClassId.Bard]: {
    name: 'Bard',
    abilities: [AbilityId.Sing],
    savingThrowProficiency: [StatId.Dexterity, StatId.Charisma],
    availableProficiencies: [SkillId.History],
    availableSpecialAbilities: [SpecialAbilityId.EnchantingSong],
    magic: MagicId.Charisma,
  },
  [ClassId.Shaman]: {
    name: 'Šaman',
    abilities: [AbilityId.Sing],
    savingThrowProficiency: [StatId.Constitution, StatId.Wisdom],
    availableProficiencies: [SkillId.History],
    availableSpecialAbilities: [SpecialAbilityId.EnchantingSong],
    magic: MagicId.Seeing,
  },
  [ClassId.Monk]: {
    name: 'Mnich',
    abilities: [AbilityId.Sing],
    savingThrowProficiency: [StatId.Strength, StatId.Dexterity],
    availableProficiencies: [SkillId.History],
    availableSpecialAbilities: [SpecialAbilityId.EnchantingSong],
    magic: MagicId.Ki,
  },
  [ClassId.Warrior]: {
    name: 'Válečník',
    abilities: [AbilityId.Fly],
    savingThrowProficiency: [StatId.Strength, StatId.Constitution],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
  },
  [ClassId.Ranger]: {
    name: 'Hraničář',
    abilities: [AbilityId.Fly],
    savingThrowProficiency: [StatId.Strength, StatId.Wisdom],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
  },
  [ClassId.Wizzard]: {
    name: 'Čaroděj',
    abilities: [AbilityId.Fly],
    savingThrowProficiency: [StatId.Intelligence, StatId.Charisma],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
    magic: MagicId.Intelligence,
  },
  [ClassId.Mage]: {
    name: 'Mág',
    abilities: [AbilityId.Fly],
    savingThrowProficiency: [StatId.Intelligence, StatId.Charisma],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
    magic: MagicId.Charisma,
  },
  [ClassId.Alchemist]: {
    name: 'Alchymista',
    abilities: [AbilityId.Fly],
    savingThrowProficiency: [StatId.Constitution, StatId.Intelligence],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
    magic: MagicId.Intelligence,
  },
  [ClassId.Druid]: {
    name: 'Druid',
    abilities: [AbilityId.Fly],
    savingThrowProficiency: [StatId.Intelligence, StatId.Wisdom],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
    magic: MagicId.Wisdom,
  },
  [ClassId.Thief]: {
    name: 'Zloděj',
    abilities: [AbilityId.Fly],
    savingThrowProficiency: [StatId.Dexterity, StatId.Intelligence],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
  },
  [ClassId.Witcher]: {
    name: 'Vědmák',
    abilities: [AbilityId.Fly],
    savingThrowProficiency: [StatId.Strength, StatId.Dexterity],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
    magic: MagicId.WitcherState,
  },
  [ClassId.Priest]: {
    name: 'Kněz',
    abilities: [AbilityId.Fly],
    savingThrowProficiency: [StatId.Intelligence, StatId.Wisdom],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
    magic: MagicId.Wisdom,
  },
  [ClassId.Inquisitor]: {
    name: 'Inkvizitor',
    abilities: [AbilityId.Fly],
    savingThrowProficiency: [StatId.Intelligence, StatId.Charisma],
    availableProficiencies: [SkillId.Athletics, SkillId.Acrobatics],
    availableSpecialAbilities: [
      SpecialAbilityId.WarCry,
      SpecialAbilityId.ShieldBash,
    ],
    magic: MagicId.Intelligence,
  },
};
