import type { NextPage } from 'next'
import Head from "next/head";
import CharacterEditor from "../components/CharacterEditor/CharacterEditor";
import { emptyCharacter } from "../components/Character";
import usePersistentState from "../components/PersistentPane";
import useCharacterStore from "../components/CharacterStore";
import { useRouter } from "next/router";

const CharacterCreator: NextPage = () => {
    const [characterStore, setCharacterStore] = useCharacterStore()
    const [character, setCharacter] = usePersistentState("new-character-creator", emptyCharacter())
    const router = useRouter()

    const saveAndReturnToIndex = () => {
        setCharacterStore({
            ...characterStore,
            [character.id]: character
        })
        setCharacter(emptyCharacter())
        router.replace("/").then(r => void r)
    }

    return (
        <>
            <Head>
                <title>DnD Character Maker - Creator</title>
                <meta name="description" content="Create a character"/>
            </Head>
            <CharacterEditor
                character={character} onCharacterModified={setCharacter}
                onComplete={saveAndReturnToIndex}/>
        </>
    )
}

export default CharacterCreator
