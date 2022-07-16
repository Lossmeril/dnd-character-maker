import type { NextPage } from 'next'
import NextLink from "next/link"
import Head from 'next/head'
import { Box, Center, Container, Divider, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const CharacterCreatorLink = () => (
    <NextLink href="/character_creator" passHref>
        <Link color="teal.500">Create character</Link>
    </NextLink>
)

const Home: NextPage = () => {
    const title = "DnD Character Maker"

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Make yourself a DnD character!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Container p={6}>
                <Center>
                    <Heading>
                        {title}
                    </Heading>
                </Center>
                <Box
                    borderWidth='1px' borderRadius='lg' overflow='hidden'
                    marginTop={6} pt={1} paddingX={2}>

                    <Box display="flex" justifyContent="space-between">
                        <Box
                            fontWeight='semibold'
                            as='h4'
                        >
                            Characters
                        </Box>
                        <CharacterCreatorLink/>
                    </Box>
                    <Divider mt={1}/>

                    {/*Display characters*/}
                    <Box p={6}>
                        <Center>
                            <VStack>
                                <Text>Nuffin here :(</Text>
                                <CharacterCreatorLink/>
                            </VStack>
                        </Center>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Home
