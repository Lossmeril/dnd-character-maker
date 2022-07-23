import { EditorPane } from "./EditorPane";
import PaneCard from "./PaneCard";
import { ClassList } from "../../../datasets/computed/enumerator";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  useNumberInput,
  Wrap,
} from "@chakra-ui/react";
import {
  FindAbilityDetail,
  FindClassDetail,
} from "../../../datasets/computed/details";
import { ClassId } from "../../../datasets/Classes";
import {
  calculateSpentClassPoints,
  getAvailableProficiencies,
} from "../../Character";
import Bold from "../../Bold";

type CardNumberInputProps = {
  value: number;
  onChange: (newValue: number) => void;
};

const CardNumberInput = ({ value, onChange }: CardNumberInputProps) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      value,
      min: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="240px">
      <Button {...inc} onClick={() => onChange(value + 1)}>
        +
      </Button>
      <Input {...input} />
      <Button {...dec} onClick={() => onChange(value - 1)}>
        -
      </Button>
    </HStack>
  );
};

type ClassCardProps = {
  classId: number;
  level: number;
  onLevelChange: (newLevel: number) => void;
};

const ClassCard = ({ classId, level, onLevelChange }: ClassCardProps) => {
  const class_ = FindClassDetail(classId);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      boxSizing="border-box"
    >
      <Heading as="h6" size="lg">
        {class_.name}
      </Heading>
      <Divider />
      {class_.abilities.map(FindAbilityDetail).map((ability, i) => (
        <Box key={i} mt={4} ml={2}>
          <Text fontWeight="bold">{ability.name}</Text>
          <Text fontSize="smaller" fontStyle="italic">
            {ability.description}
          </Text>
        </Box>
      ))}
      <Box mt={4}>
        <CardNumberInput value={level} onChange={onLevelChange} />
      </Box>
    </Box>
  );
};

const ClassPane: EditorPane = ({
  character,
  onCharacterModified,
  onNavigateBack,
  onNavigateForward,
}) => {
  const spentPoints = calculateSpentClassPoints(character);

  const onLevelChange =
    (classId: ClassId, oldLevel: number) => (newLevel: number) => {
      if (spentPoints - oldLevel + newLevel > character.level) {
        return;
      }

      const newCharacter = {
        ...character,
        classes: {
          ...character.classes,
          [classId]: newLevel,
        },
      };

      const availableProficiencies = getAvailableProficiencies(newCharacter);

      onCharacterModified({
        ...newCharacter,
        proficiencies: character.proficiencies.filter((skillId) =>
          availableProficiencies.includes(skillId)
        ),
      });
    };

  return (
    <PaneCard
      title="Class"
      onNavigateBack={onNavigateBack}
      onNavigateForward={onNavigateForward}
    >
      <Wrap direction={{ base: "column", sm: "row" }} gap={4}>
        {ClassList.map((classId) => {
          const currentLevel = character.classes[classId as ClassId];

          return (
            <ClassCard
              key={classId}
              classId={classId}
              level={currentLevel}
              onLevelChange={onLevelChange(classId, currentLevel)}
            ></ClassCard>
          );
        })}
      </Wrap>
      <Text mt={4}>
        Zbývající body:
        <Bold> {character.level - spentPoints}</Bold>
      </Text>
    </PaneCard>
  );
};

export default ClassPane;
