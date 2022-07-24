import { EditorPane } from './EditorPane';
import PaneCard from './PaneCard';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { RaceList } from '../../../datasets/computed/enumerator';
import {
  FindRaceDetail,
  FindStatDetail,
} from '../../../datasets/computed/details';
import { Race } from '../../../datasets/RaceDetails';
import {
  Heading,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

type RaceInfoProps = {
  race: Race;
};

const RaceInfo = ({ race }: RaceInfoProps) => {
  const formatAmount = (amount: number) => (
    <Text fontWeight='bold' as='span'>
      {amount >= 0 ? `+${amount}` : `${amount}`}
    </Text>
  );

  return (
    <>
      <Heading as='h4'>Stat modifiers</Heading>
      <UnorderedList listStyleType='none' ml={0}>
        {race.modifiers.map(([statId, howMuch], i) => (
          <ListItem key={i}>
            {formatAmount(howMuch)} {FindStatDetail(statId).name}
          </ListItem>
        ))}
      </UnorderedList>
      {/*    TODO: insert random text*/}
    </>
  );
};

const RacePane: EditorPane = ({
  character,
  onCharacterModified,
  onNavigateBack,
  onNavigateForward,
}) => {
  const races = RaceList.map(FindRaceDetail);

  const onRaceChanged = (index: number) => {
    onCharacterModified({ ...character, race: index });
  };

  return (
    <PaneCard
      title='Race'
      onNavigateBack={onNavigateBack}
      onNavigateForward={onNavigateForward}
    >
      <Tabs defaultIndex={character.race} onChange={onRaceChanged}>
        <TabList>
          {races.map((race, i) => (
            <Tab key={i}>{race.name}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {races.map((race, i) => (
            <TabPanel key={i}>
              <RaceInfo race={race}></RaceInfo>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </PaneCard>
  );
};

export default RacePane;
