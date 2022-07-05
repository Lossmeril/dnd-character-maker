import { Abilities } from './abilities';

export const Skills = {
  strength: {
    index: 'strength',
    name: 'Síla',
    abilities: [Abilities.athletics],
  },
  dexterity: {
    index: 'dexterity',
    name: 'Obratnost',
    abilities: [
      Abilities.acrobatics,
      Abilities.sleightOfHand,
      Abilities.stealth,
    ],
  },
  constitution: {
    index: 'constitution',
    name: 'Odolnost',
    abilities: [],
  },
  intelligence: {
    index: 'intelligence',
    name: 'Inteligence',
    abilities: [
      Abilities.arcana,
      Abilities.history,
      Abilities.investigation,
      Abilities.nature,
      Abilities.religion,
    ],
  },
  wisdom: {
    index: 'wisdom',
    name: 'Moudrost',
    abilities: [
      Abilities.animalHandling,
      Abilities.insight,
      Abilities.medicine,
      Abilities.perception,
      Abilities.survival,
    ],
  },
  charisma: {
    index: 'charisma',
    name: 'Charisma',
    abilities: [
      Abilities.deception,
      Abilities.intimidation,
      Abilities.performance,
      Abilities.persuasion,
    ],
  },
};
