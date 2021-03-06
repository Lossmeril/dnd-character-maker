import type { NextPage } from 'next'
import NextLink from "next/link"
import Head from 'next/head'
import {
    Box,
    Button,
    Center,
    Container,
    Divider,
    Flex,
    Heading,
    Link,
    List,
    ListItem,
    Text,
    VStack
} from "@chakra-ui/react";
import useCharacterStore from "../components/CharacterStore";
import _ from "lodash"
import { Character } from "../components/Character";

const CharacterCreatorLink = () => (
    <NextLink href="/character_creator" passHref>
        <Link color="teal.500">Create character</Link>
    </NextLink>
)

type CharacterLinkProps = {
    character: Character
}

const CharacterEditorLink = ({character: {id, name}}: CharacterLinkProps) => (
    <NextLink href={"/character_editor/" + id} passHref>
        <Link color="teal.500">{name}</Link>
    </NextLink>
)

const PrintLink = ({character: {id, name}}: CharacterLinkProps) => (
    <NextLink href={"/export/" + id} passHref>
        <Button size="sm">Export</Button>
    </NextLink>
)

const Home: NextPage = () => {
    const title = "DnD Character Maker"

    const [characterStore, __] = useCharacterStore()
    const characters = _(characterStore).entries().value()

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
                    marginTop={6} pt={1} paddingX={4}>

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
                        {
                            characters.length == 0 && <Center>
                                <VStack>
                                    <Text>Nuffin here :(</Text>
                                    <CharacterCreatorLink/>
                                </VStack>
                            </Center>
                        }
                        {
                            characters.length > 0 &&
                            <List>
                                {
                                    characters.map(([id, character]) => (
                                        <ListItem key={id} mt={2}>
                                            <Flex
                                                justifyContent="space-between">
                                                <CharacterEditorLink character={character}/>
                                                <PrintLink character={character}></PrintLink>
                                            </Flex>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        }
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Home
