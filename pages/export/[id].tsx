import { useRouter } from "next/router";
import usePersistentState from "../../components/PersistentPane";
import { Character, emptyCharacter } from "../../components/Character";
import useCharacterStore from "../../components/CharacterStore";
import Head from "next/head";
import CharacterEditorComponent from "../../components/CharacterEditor/CharacterEditor";
import NextLink from "next/link";
import { Box, Button, Link, Wrap } from "@chakra-ui/react";
import CharacterOverview from "../../components/CharacterOverview";

const CharacterEditor = () => {
    const router = useRouter()
    const {id: idQuery} = router.query

    const [characterStore, setCharacterStore] = useCharacterStore()

    if(idQuery === undefined || idQuery.length == 0) {
        return <>Bad request</>
    }

    const id = Array.isArray(idQuery) ? idQuery[0] : idQuery

    const character = characterStore[id]
    if(character === undefined) {
        return (
            <>
                Not Found {id}
                <NextLink href="/" passHref>
                    <Link>Zpět</Link>
                </NextLink>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>DnD Character Maker - Editor</title>
                <meta name="description" content={`Edit character ${character.name}`}/>
            </Head>
            <Box m={4}>
                <CharacterOverview character={character}/>
                <Wrap mt={4}
                      spacing={4}
                      sx={{
                          '@media print': {
                              display: 'none',
                          },
                      }}
                >
                    <NextLink href="/" passHref>
                        <Button>Back</Button>
                    </NextLink>
                    <Button colorScheme="blue" onClick={() => window.print()}>Print</Button>
                </Wrap>
            </Box>
        </>
    )
}

export default CharacterEditor
