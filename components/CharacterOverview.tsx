import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import {
  FindClassDetail,
  FindRaceDetail,
  FindSexDetail,
  FindSkillDetail,
  FindSpecialAbilityDetail,
  FindStatDetail,
} from '../datasets/computed/details';
import _ from 'lodash';
import { ClassId } from '../datasets/Classes';
import { StatId } from '../datasets/Stats';
import { calculateResultStatValue, Character } from './Character';
import { CalculateStatModifier } from './StatUtil';
import { CalculateProficiency } from './proficiencyUtil';

type OverviewFieldProps = {
  label: string;
  children: React.ReactNode;
};

const OverviewField = ({ label, children }: OverviewFieldProps) => (
  <Box mt={2}>
    <Text size='larger' fontWeight='bold'>
      {label}
    </Text>
    <Box>{children}</Box>
  </Box>
);

type CharacterOverviewProps = {
  character: Character;
};

const CharacterOverview = ({ character }: CharacterOverviewProps) => {
  return (
    <Box
      //@ts-ignore
      display={{ base: null, md: 'grid' }}
      //@ts-ignore
      gridTemplateColumns={{ base: null, md: '1fr 1fr' }}
    >
      <OverviewField label='Jméno'>{character.name}</OverviewField>
      <OverviewField label='Pohlaví'>
        {FindSexDetail(character.sex).name}
      </OverviewField>
      <OverviewField label='Rasa'>
        {FindRaceDetail(character.race).name}
      </OverviewField>
      <OverviewField label='Úroveň'>{character.level}</OverviewField>
      <OverviewField label='Povolání'>
        {_(character.classes)
          .entries()
          .filter(([_, level]) => level > 0)
          .map(([classId, level]) => (
            <Text key={classId}>
              {FindClassDetail(classId as unknown as ClassId).name} (úroveň{' '}
              {level})
            </Text>
          ))
          .toJSON()}
      </OverviewField>
      <OverviewField label='Staty'>
        {_(character.stats)
          .entries()
          .map(([statId, level]) => (
            <Text key={statId}>
              {FindStatDetail(statId as unknown as StatId).name}:{' '}
              {calculateResultStatValue(character, statId as unknown as StatId)}{' '}
              (
              {CalculateStatModifier(
                calculateResultStatValue(character, statId as unknown as StatId)
              )}
              )
            </Text>
          ))
          .value()}
      </OverviewField>
      <OverviewField label='Proficiencies'>
        <Text>
          Současný proficiency bonus je: {CalculateProficiency(character.level)}
        </Text>
        {character.proficiencies.map(FindSkillDetail).map((skill, i) => (
          <Text key={i}>{skill.name}</Text>
        ))}
      </OverviewField>
      <OverviewField label='Special Ability'>
        {character.specialAbilities
          .map(FindSpecialAbilityDetail)
          .map((specialAbility, i) => (
            <Text key={i}>{specialAbility.name}</Text>
          ))}
      </OverviewField>

      <OverviewField label='Magie'>{}</OverviewField>
    </Box>
  );
};

export default CharacterOverview;
