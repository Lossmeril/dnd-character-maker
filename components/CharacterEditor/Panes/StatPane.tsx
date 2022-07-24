import { EditorPane } from './EditorPane';
import PaneCard from './PaneCard';
import {
  FindRaceDetail,
  FindSkillDetail,
  FindStatDetail,
} from '../../../datasets/computed/details';
import { StatList } from '../../../datasets/computed/enumerator';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { StatId } from '../../../datasets/Stats';
import {
  calculateDistributedPoints,
  calculateResultStatValue,
  Character,
  CHARACTER_BASE_DISTRIBUTABLE_POINTS,
  DEFAULT_STAT_VALUE,
  defaultStatMap,
} from '../../Character';
import Bold from '../../Bold';
import { useState } from 'react';
import { CalculateStatModifier, GetStatPointCost } from '../../StatUtil';

type StatSliderProps = {
  statId: StatId;
  character: Character;
  onStatChange: (newValue: number) => void;
};

const StatSlider = ({ statId, character, onStatChange }: StatSliderProps) => {
  const stat = FindStatDetail(statId);
  const statValue = character.stats[statId];

  const [showTooltip, setShowTooltip] = useState(false);

  const resultStatValue = calculateResultStatValue(character, statId);

  const statModifier = CalculateStatModifier(resultStatValue);

  return (
    <Box>
      <Flex justifyContent='space-between'>
        <Heading as='h4' fontSize='1.2em'>
          {stat.name}
        </Heading>
        <Text>
          <Bold>
            {resultStatValue} (
            {statModifier >= 0 ? `+${statModifier}` : `${statModifier}`})
          </Bold>
        </Text>
      </Flex>
      <Slider
        mt={2}
        step={1}
        size='lg'
        min={8}
        max={15}
        value={statValue}
        colorScheme='blue'
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onChange={onStatChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
        <Tooltip
          hasArrow
          bg='blue.200'
          color='black'
          placement='top'
          isOpen={showTooltip}
          label={`${statValue}`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
      <Text mt={2}>
        {stat.name !== 'Odolnost'
          ? stat.name +
            ' ovlivňuje činnosti jako: ' +
            stat.skills.map((skill) => ' ' + FindSkillDetail(skill).name)
          : 'Odolnost ovlivňuje zdraví postavy'}
      </Text>
      <Divider my={4} />
    </Box>
  );
};

const StatPane: EditorPane = ({
  character,
  onCharacterModified,
  onNavigateBack,
  onNavigateForward,
}) => {
  const totalDistributablePoints = CHARACTER_BASE_DISTRIBUTABLE_POINTS;
  const alreadyDistributedPoints = calculateDistributedPoints(character);

  const resetStats = () => {
    onCharacterModified({
      ...character,
      stats: defaultStatMap(DEFAULT_STAT_VALUE),
    });
  };

  const changeStat = (statId: StatId) => (newValue: number) => {
    const valueDelta = newValue - character.stats[statId];

    // only validate if user adds points to a stat
    if (valueDelta > 0) {
      const newDistributedPoints =
        alreadyDistributedPoints +
        GetStatPointCost(newValue) -
        GetStatPointCost(character.stats[statId]);

      if (newDistributedPoints > totalDistributablePoints) {
        return;
      }
    }

    onCharacterModified({
      ...character,
      stats: {
        ...character.stats,
        [statId]: newValue,
      },
    });
  };

  return (
    <PaneCard
      title='Stats'
      onNavigateBack={onNavigateBack}
      onNavigateForward={onNavigateForward}
    >
      {StatList.map((statId) => (
        <StatSlider
          key={statId}
          character={character}
          statId={statId}
          onStatChange={changeStat(statId)}
        ></StatSlider>
      ))}
      <Flex justifyContent='space-between' mt={4}>
        <Text>
          Zbývající body:
          <Bold> {totalDistributablePoints - alreadyDistributedPoints}</Bold>
        </Text>
        <Button onClick={resetStats} colorScheme='red'>
          Reset
        </Button>
      </Flex>
    </PaneCard>
  );
};

export default StatPane;
