import {
  Box,
  Button,
  Container,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { MdCheckCircle, MdDangerous } from 'react-icons/md';
import { CharacterEditorPhase } from './Phases';

type PhaseLineProps = {
  current: boolean;
  ok: boolean;
  name: string;
  onClick: () => void;
};

const PhaseLine = ({ current, ok, name, onClick }: PhaseLineProps) => (
  <ListItem
    bgColor={current ? '#0D3340' : 'transparent'}
    py={3}
    px={14}
    width='100%'
    onClick={onClick}
    _hover={{
      cursor: 'pointer',
      textDecoration: 'underline',
    }}
  >
    <ListIcon
      as={ok ? MdCheckCircle : MdDangerous}
      color={ok ? 'green.500' : 'red.500'}
    />
    <Text as='span' color={ok ? 'green.500' : 'red.500'}>
      {name}
    </Text>
  </ListItem>
);

type PhaseOverviewProps = {
  onPhaseSelected: (phase: CharacterEditorPhase) => void;
  onComplete: () => void;
  nameSexGood: boolean;
  raceGood: boolean;
  statsGood: boolean;
  classGood: boolean;
  proficiencyGood: boolean;
  specialAbilitiesGood: boolean;
  allGood: boolean;
  currentPhase: CharacterEditorPhase;
};

const PhaseOverview = ({
  nameSexGood,
  raceGood,
  statsGood,
  classGood,
  proficiencyGood,
  specialAbilitiesGood,
  allGood,
  onPhaseSelected,
  onComplete,
  currentPhase,
}: PhaseOverviewProps) => {
  const selectPhase = (phase: CharacterEditorPhase) => () =>
    onPhaseSelected(phase);

  return (
    <Container
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      //@ts-ignore
      marginTop={{ base: null, md: 6 }}
      width='100%'
      p={0}
      py={3}
    >
      <List spacing={3} width='100%'>
        <PhaseLine
          current={currentPhase == CharacterEditorPhase.NameSex}
          ok={nameSexGood}
          name={'Name && Sex'}
          onClick={selectPhase(CharacterEditorPhase.NameSex)}
        ></PhaseLine>
        <PhaseLine
          current={currentPhase == CharacterEditorPhase.Race}
          ok={raceGood}
          name={'Race'}
          onClick={selectPhase(CharacterEditorPhase.Race)}
        ></PhaseLine>
        <PhaseLine
          current={currentPhase == CharacterEditorPhase.Stat}
          ok={statsGood}
          name={'Stats'}
          onClick={selectPhase(CharacterEditorPhase.Stat)}
        ></PhaseLine>
        <PhaseLine
          current={currentPhase == CharacterEditorPhase.Class}
          ok={classGood}
          name={'Class'}
          onClick={selectPhase(CharacterEditorPhase.Class)}
        ></PhaseLine>
        <PhaseLine
          current={currentPhase == CharacterEditorPhase.Proficiency}
          ok={proficiencyGood}
          name={'Proficiency'}
          onClick={selectPhase(CharacterEditorPhase.Proficiency)}
        ></PhaseLine>
        <PhaseLine
          current={currentPhase == CharacterEditorPhase.SpecialAbilities}
          ok={specialAbilitiesGood}
          name={'Special Abilities'}
          onClick={selectPhase(CharacterEditorPhase.SpecialAbilities)}
        ></PhaseLine>
        <PhaseLine
          current={currentPhase == CharacterEditorPhase.Overview}
          ok={allGood}
          name={'Overview'}
          onClick={selectPhase(CharacterEditorPhase.Overview)}
        ></PhaseLine>
      </List>
      {allGood && (
        <Flex mt={3} direction='column'>
          <Button onClick={onComplete} colorScheme='green'>
            Save
          </Button>
        </Flex>
      )}
    </Container>
  );
};

export default PhaseOverview;
