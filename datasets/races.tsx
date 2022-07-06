import { Skills } from './skills';

export const Races = {
  human: {
    index: 'human',
    name: 'Člověk',
    increases: [
      [Skills.strength, 1],
      [Skills.dexterity, 1],
      [Skills.constitution, 1],
      [Skills.intelligence, 1],
      [Skills.wisdom, 1],
      [Skills.charisma, 1],
    ],
  },
  elf: { index: 'elf', name: 'Elf', increases: [[Skills.dexterity, 2]] },
  dwarf: {
    index: 'dwarf',
    name: 'Trpaslík',
    increases: [[Skills.constitution, 2]],
  },
  halfling: {
    index: 'halfling',
    name: 'Půlčík',
    increases: [
      [Skills.dexterity, 2],
      [Skills.charisma, 1],
    ],
  },
  kroll: {
    index: 'kroll',
    name: 'Kroll',
    increases: [
      [Skills.strength, 2],
      [Skills.constitution, 1],
    ],
  },
};
