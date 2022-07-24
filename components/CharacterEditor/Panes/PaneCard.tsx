import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
} from '@chakra-ui/react';

type PaneCardProps = {
  title: string;
  children: React.ReactNode;

  onNavigateBack?: () => void;
  onNavigateForward?: () => void;
};

const PaneCard = ({
  title,
  children,
  onNavigateBack = undefined,
  onNavigateForward = undefined,
}: PaneCardProps) => {
  return (
    // <Container mt="4%" height="90%">
    <Box paddingInlineStart={4} paddingInlineEnd={4} height='92%' my='4%'>
      <Box
        borderWidth='1px'
        borderRadius='lg'
        overflowY='scroll'
        p={6}
        boxSizing='border-box'
        height='100%'
      >
        <Heading as='h3'>{title}</Heading>

        <Flex direction='column' justifyContent='space-between'>
          <Box mt={6} height='100%'>
            {children}
          </Box>
          <HStack mt={4} spacing={1}>
            {onNavigateBack && <Button onClick={onNavigateBack}>Back</Button>}
            {onNavigateForward && (
              <Button onClick={onNavigateForward} colorScheme='blue'>
                Next
              </Button>
            )}
          </HStack>
        </Flex>
      </Box>
    </Box>
    // </Container>
  );
};

export default PaneCard;
