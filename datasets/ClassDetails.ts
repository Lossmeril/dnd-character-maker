import { ClassId } from './Classes';
import { AbilityId } from './Ability';
import { SkillId } from './Skills';
import { SpecialAbilityId } from './SpecialAbility';
import { MagicId } from './Magic';
import { StatId } from './Stats';

export type Class = {
  name: string;
  shortDesc?: string;
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
    shortDesc:
      'Když se tento bájný válečník rozzuří, rozsévá smrt nehledě na svá zranění',
    abilities: [AbilityId.Sing],
    savingThrowProficiency: [StatId.Strength, StatId.Constitution],
    availableProficiencies: [SkillId.History],
    availableSpecialAbilities: [SpecialAbilityId.EnchantingSong],
  },
  [ClassId.Bard]: {
    name: 'Bard',
    shortDesc:
      'Bojovník na poli intrik a citů, ozbrojen pouze svým nástrojem a charismatem',
    abilities: [AbilityId.Sing],
    savingThrowProficiency: [StatId.Dexterity, StatId.Charisma],
    availableProficiencies: [SkillId.History],
    availableSpecialAbilities: [SpecialAbilityId.EnchantingSong],
    magic: MagicId.Charisma,
  },
  [ClassId.Shaman]: {
    name: 'Šaman',
    shortDesc:
      'Jeho mysl brázdí tenké hranice světů a i němá tvář se před ním rozpovídá',
    abilities: [AbilityId.Sing],
    savingThrowProficiency: [StatId.Constitution, StatId.Wisdom],
    availableProficiencies: [SkillId.History],
    availableSpecialAbilities: [SpecialAbilityId.EnchantingSong],
    magic: MagicId.Seeing,
  },
  [ClassId.Monk]: {
    name: 'Mnich',
    shortDesc:
      'Léta meditace ho naučila jak vládnout tělu i živlům za pomoci soustředění',
    abilities: [AbilityId.Sing],
    savingThrowProficiency: [StatId.Strength, StatId.Dexterity],
    availableProficiencies: [SkillId.History],
    availableSpecialAbilities: [SpecialAbilityId.EnchantingSong],
    magic: MagicId.Ki,
  },
  [ClassId.Warrior]: {
    name: 'Válečník',
    shortDesc: 'Neohrožený mistr své zbraně zasévající strach do řad nepřátel',
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
    shortDesc:
      'Z divočiny vychází netknutý, vybavený a se smečkou nových přátel',
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
    shortDesc: 'Podmanil si oheň, blesky a vítr a s jejich pomocí tvoří i ničí',
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
    shortDesc:
      'Ohýbá nitky reality, dokud nikdo nepozná, co je skutečné a co jen iluze',
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
    shortDesc:
      'Vědění dneška ho nudí, a proto vymýšlí zbrusu nové způsoby jak ničit a oživovat',
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
    shortDesc:
      'Příroda mu dala dar, za pomocí nějž může poručit vodě, zemi a rostlinám',
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
    shortDesc:
      'Hbité prsty a jazyk mu umožňují přežít v temných uličkách a útočit ze zálohy',
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
    shortDesc:
      'Podrobil své tělo kruté magii, aby povstal nadlidsky uzpůsobený do boje s monstry',
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
    shortDesc:
      'Naučil se léčit skrze alchymii a magii, i tehdy, kdy se nevolá medik ale hrobník',
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
    shortDesc:
      'Lidé se modlí, aby ho nepotřebovali. Zločinci se modlí, aby si jich nevšimnul.',
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
