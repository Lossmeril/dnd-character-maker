import { EditorPane } from './EditorPane';
import PaneCard from './PaneCard';
import { ClassList } from '../../../datasets/computed/enumerator';
import {
  Avatar,
  Image,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
  useNumberInput,
  Wrap,
  Tooltip,
} from '@chakra-ui/react';
import {
  FindAbilityDetail,
  FindClassDetail,
} from '../../../datasets/computed/details';
import { ClassId } from '../../../datasets/Classes';
import {
  calculateSpentClassPoints,
  getAvailableProficiencies,
} from '../../Character';
import Bold from '../../Bold';

type CardNumberInputProps = {
  value: number;
  onChange: (newValue: number) => void;
  onOpen: () => void;
};

const CardNumberInput = ({ value, onChange, onOpen }: CardNumberInputProps) => {
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
    <HStack maxW='240px'>
      <Button {...dec} onClick={() => onChange(value - 1)} width='10%'>
        -
      </Button>
      <Input {...input} isReadOnly width='25%' />
      <Button {...inc} onClick={() => onChange(value + 1)} width='10%'>
        +
      </Button>
      <Button onClick={onOpen} width='55%'>
        Detaily
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        p={6}
        boxSizing='border-box'
      >
        <Flex verticalAlign='middle'>
          <Heading as='h6' size='lg'>
            {class_.name}
          </Heading>
          <Spacer />
          {(class_.magic || class_.magic == 0) && class_.magic <= 2 ? (
            <Tooltip
              label='Uživatel magie'
              hasArrow
              arrowSize={5}
              placement='top'
            >
              <Avatar
                size='sm'
                src='/icons/magic.png'
                ignoreFallback
                bgColor='blue.200'
              />
            </Tooltip>
          ) : (
            <></>
          )}
          {class_.magic && class_.magic >= 3 ? (
            <Tooltip
              label='Uživatel pseudo-magie'
              hasArrow
              arrowSize={5}
              placement='top'
            >
              <Avatar
                size='sm'
                src='/icons/magic.png'
                ignoreFallback
                bgColor='green.200'
              />
            </Tooltip>
          ) : (
            <></>
          )}
        </Flex>
        <Divider />

        <Box mt={4}>
          <CardNumberInput
            value={level}
            onChange={onLevelChange}
            onOpen={onOpen}
          />
        </Box>
      </Box>

      {/* MODAL */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
        scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent overflow='hidden'>
          <Image
            src={'./img/' + class_.name + '.jpg'}
            alt={class_.name}
            w='100%'
            h='30vh'
            objectFit='cover'
            objectPosition='top center'
          />
          <ModalHeader></ModalHeader>
          <ModalCloseButton bgColor='whiteAlpha.500' />
          <ModalBody>
            <Heading as='h6' size='lg'>
              {class_.name}
            </Heading>
            <Divider />
            <Flex mt={2}>
              {(class_.magic || class_.magic == 0) && class_.magic <= 2 ? (
                <Tooltip
                  label='Uživatel magie'
                  hasArrow
                  arrowSize={5}
                  placement='top'
                >
                  <Avatar
                    size='sm'
                    src='/icons/magic.png'
                    ignoreFallback
                    bgColor='blue.200'
                  />
                </Tooltip>
              ) : (
                <></>
              )}
              {class_.magic && class_.magic >= 3 ? (
                <Tooltip
                  label='Uživatel pseudo-magie'
                  hasArrow
                  arrowSize={5}
                  placement='top'
                >
                  <Avatar
                    size='sm'
                    src='/icons/magic.png'
                    ignoreFallback
                    bgColor='green.200'
                  />
                </Tooltip>
              ) : (
                <></>
              )}
            </Flex>
            {class_.abilities.map(FindAbilityDetail).map((ability, i) => (
              <Box key={i} mt={4} ml={2}>
                <Text fontWeight='bold'>{ability.name}</Text>
                <Text fontSize='smaller' fontStyle='italic'>
                  {ability.description}
                </Text>
              </Box>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
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
      title='Class'
      onNavigateBack={onNavigateBack}
      onNavigateForward={onNavigateForward}
    >
      <Wrap direction={{ base: 'column', sm: 'row' }} gap={4}>
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
