import {
  calculateDistributedPoints,
  calculateSpentClassPoints,
  Character,
  CHARACTER_BASE_DISTRIBUTABLE_POINTS,
} from '../Character';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import PhaseOverview from './PhaseOverview';
import { CharacterEditorPhase } from './Phases';
import { EditorPane } from './Panes/EditorPane';
import NameSexPane from './Panes/NameSexPane';
import RacePane from './Panes/RacePane';
import ClassPane from './Panes/ClassPane';
import usePersistentState from '../PersistentPane';
import StatPane from './Panes/StatPane';
import ProficiencyPane from './Panes/ProficiencyPane';
import OverviewPane from './Panes/OverviewPane';
import NOT_SELECTED_ID from '../../datasets/NotSelected';
import SpecialAbilityPane from './Panes/SpecialAbilityPane';

type CharacterEditorProps = {
  character: Character;
  onCharacterModified: (character: Character) => void;
  onComplete: () => void;
};

const CharacterEditor = ({
  character,
  onCharacterModified,
  onComplete,
}: CharacterEditorProps) => {
  const [currentPhase, setCurrentPhase] = usePersistentState(
    'character-editor.phase',
    CharacterEditorPhase.NameSex
  );

  const editorPanes: { [key in CharacterEditorPhase]: EditorPane } = {
    [CharacterEditorPhase.NOT_SELECTED]: () => <></>,
    [CharacterEditorPhase.NameSex]: NameSexPane,
    [CharacterEditorPhase.Race]: RacePane,
    [CharacterEditorPhase.Class]: ClassPane,
    [CharacterEditorPhase.Stat]: StatPane,
    [CharacterEditorPhase.Proficiency]: ProficiencyPane,
    [CharacterEditorPhase.SpecialAbilities]: SpecialAbilityPane,
    [CharacterEditorPhase.Overview]: OverviewPane,
  };

  const nameSexGood =
    character.name.length > 0 && character.sex != NOT_SELECTED_ID;
  const raceGood = character.race != NOT_SELECTED_ID;
  const statsGood =
    calculateDistributedPoints(character) -
      CHARACTER_BASE_DISTRIBUTABLE_POINTS ===
    0;
  const classGood = calculateSpentClassPoints(character) == character.level;
  const proficiencyGood = character.proficiencies.length == character.level;
  const specialAbilitiesGood =
    character.specialAbilities.length == character.level;
  const allGood =
    nameSexGood &&
    raceGood &&
    statsGood &&
    classGood &&
    proficiencyGood &&
    specialAbilitiesGood;

  return (
    <Grid
      // @ts-ignore tis correct
      height={{ base: null, md: '100vh' }}
      templateAreas={{
        base: `"content" "overview"`,
        md: `"overview content"`,
      }}
      // @ts-ignore tis correct
      gridTemplateColumns={{ base: null, md: '26% 70%' }}
    >
      <GridItem area='content'>
        <Box
          // @ts-ignore tis correct
          height={{ base: null, md: '100vh' }}
          overflowY='hidden'
        >
          {editorPanes[currentPhase]({
            character,
            onCharacterModified,
            onNavigateBack: () => setCurrentPhase(currentPhase - 1),
            onNavigateForward: () => setCurrentPhase(currentPhase + 1),
            onComplete: () => console.log(character),
          })}
        </Box>
      </GridItem>
      <GridItem
        area='overview'
        px={4}
        // @ts-ignore tis correct
        margin={{ base: null, md: 'auto' }}
      >
        <PhaseOverview
          nameSexGood={nameSexGood}
          raceGood={raceGood}
          statsGood={statsGood}
          classGood={classGood}
          proficiencyGood={proficiencyGood}
          specialAbilitiesGood={specialAbilitiesGood}
          allGood={allGood}
          onPhaseSelected={setCurrentPhase}
          onComplete={onComplete}
        />
      </GridItem>
    </Grid>
  );
};

export default CharacterEditor;
