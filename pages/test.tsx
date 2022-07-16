import { RaceList, StatList } from "../datasets/computed/enumerator";
import { Heading, Box, Flex, UnorderedList, ListItem, ListIcon } from '@chakra-ui/react';
import { FindRaceDetail, FindSkillDetail, FindStatDetail } from "../datasets/computed/details";
import { RaceId } from "../datasets/Races";
import { StatId } from "../datasets/Stats";

const StatBox = (id: StatId) => {
    const stat = FindStatDetail(id)

    return (
        <Box
            key={id}
            w='sm'
            p={2}
            width="fit-content"
            minWidth="14em"
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            textAlign='center'
        >
            <Heading as='h2'>{stat.name}</Heading>
            <UnorderedList styleType="none" p={0} m={0}>
                {stat.skills.map((skillId) => {
                    const skill = FindSkillDetail(skillId)
                    return (
                        <ListItem key={skillId}>
                            {skill.name}
                        </ListItem>
                    )
                })}
            </UnorderedList>
        </Box>
    )
}

const RaceBox = (id: RaceId) => {
    const race = FindRaceDetail(id)

    return (
        <Box
            key={id}
            w='sm'
            p={2}
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            textAlign='center'
        >
            <Heading as='h2'>{race.name}</Heading>
            <ul>
                {race.modifiers.map(([statId, howMuch], i) => {
                    const stat = FindStatDetail(statId)

                    return (
                        <li key={i}>{stat.name + ' +' + howMuch}</li>
                    )
                })}
            </ul>
        </Box>
    )
}

const TestPage = () => {
    return (
        <Box p={4}>
            <Heading as='h1'>Skilly</Heading>
            <Flex gap={12} p={4} flexWrap="wrap">
                {StatList.map(StatBox)}
            </Flex>

            <Heading as='h1'>Rasy</Heading>
            <Flex gap={12} p={4}>
                {RaceList.map(RaceBox)}
            </Flex>
        </Box>
    );
};

export default TestPage;
