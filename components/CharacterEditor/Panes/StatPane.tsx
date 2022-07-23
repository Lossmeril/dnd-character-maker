import { EditorPane } from "./EditorPane";
import PaneCard from "./PaneCard";
import {
  FindRaceDetail,
  FindStatDetail,
} from "../../../datasets/computed/details";
import { StatList } from "../../../datasets/computed/enumerator";
import {
  Box,
  Button,
  Center,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { StatId } from "../../../datasets/Stats";
import {
  calculateDistributedPoints,
  calculateResultStatValue,
  Character,
  CHARACTER_BASE_DISTRIBUTABLE_POINTS,
  DEFAULT_STAT_VALUE,
  defaultStatMap,
} from "../../Character";
import Bold from "../../Bold";
import { useState } from "react";
import { CalculateStatModifier, GetStatPointCost } from "../../StatUtil";

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
      <Flex justifyContent="space-between">
        <Text>{stat.name}</Text>
        <Text>
          <Bold>
            {resultStatValue} (
            {statModifier >= 0 ? `+${statModifier}` : `${statModifier}`})
          </Bold>
        </Text>
      </Flex>
      <Slider
        step={1}
        min={8}
        max={15}
        value={statValue}
        colorScheme="teal"
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
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${statValue}`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
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
      title="Stats"
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
      <Flex justifyContent="space-between" mt={4}>
        <Text>
          Zbývající body:
          <Bold> {totalDistributablePoints - alreadyDistributedPoints}</Bold>
        </Text>
        <Button onClick={resetStats} colorScheme="red">
          Reset
        </Button>
      </Flex>
    </PaneCard>
  );
};

export default StatPane;
