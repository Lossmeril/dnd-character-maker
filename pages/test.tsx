import { Skills } from '../datasets/skills';
import { Races } from '../datasets/races';
import { Heading, Box, Flex } from '@chakra-ui/react';

const TestPage = () => {
  return (
    <>
      <Heading as='h1'>Skilly</Heading>
      <Flex gap={12}>
        {Object.values(Skills).map((skill) => (
          <Box
            key={skill.index}
            w='sm'
            p={2}
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            textAlign='center'
          >
            <Heading as='h2'>{skill.name}</Heading>
            <ul>
              {skill.abilities.map((ability) => (
                <li key={ability.index}>{ability.name}</li>
              ))}
            </ul>
          </Box>
        ))}
      </Flex>

      <Heading as='h1'>Rasy</Heading>
      <Flex gap={12}>
        {Object.values(Races).map((race) => (
          <Box
            key={race.index}
            w='sm'
            p={2}
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            textAlign='center'
          >
            <Heading as='h2'>{race.name}</Heading>
            <ul>
              {race.increases.map((skill, i) => (
                <li key={i}>{skill[0].name + ' +' + skill[1]}</li>
              ))}
            </ul>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default TestPage;
