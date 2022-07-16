import type { NextPage } from 'next'
import Head from "next/head";
import CharacterEditor from "../components/CharacterEditor/CharacterEditor";
import { emptyCharacter } from "../components/Character";
import usePersistentState from "../components/PersistentPane";

const CharacterCreator: NextPage = () => {
    // TODO: clear character on complete
    const [character, setCharacter] = usePersistentState("new-character-creator", emptyCharacter())

    return (
        <>
            <Head>
                <title>DnD Character Maker - Creator</title>
                <meta name="description" content="Create a character"/>
            </Head>
            <CharacterEditor character={character} onCharacterModified={setCharacter}/>
        </>
    )
}

export default CharacterCreator
