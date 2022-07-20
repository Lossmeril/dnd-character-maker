import { useRouter } from "next/router";
import usePersistentState from "../../components/PersistentPane";
import { Character, emptyCharacter } from "../../components/Character";
import useCharacterStore from "../../components/CharacterStore";
import Head from "next/head";
import CharacterEditorComponent from "../../components/CharacterEditor/CharacterEditor";

const CharacterEditor = () => {
    const router = useRouter()
    const {id: idQuery} = router.query

    const [characterStore, setCharacterStore] = useCharacterStore()

    if(idQuery === undefined || idQuery.length == 0) {
        return <>{idQuery}</>
    }

    const id = Array.isArray(idQuery) ? idQuery[0] : idQuery

    const character = characterStore[id]
    if(character === undefined) {
        return <>Not Found</>;
    }

    const saveAndReturnToIndex = () => {
        setCharacterStore({
            ...characterStore,
            [character.id]: character
        })
        router.replace("/").then(r => void r)
    }

    const updateCharacter = (newCharacter: Character) => {
        setCharacterStore({
            ...characterStore,
            [character.id]: newCharacter
        })
    }

    return (
        <>
            <Head>
                <title>DnD Character Maker - Editor</title>
                <meta name="description" content={`Edit character ${character.name}`}/>
            </Head>
            <CharacterEditorComponent
                character={character} onCharacterModified={updateCharacter}
                onComplete={saveAndReturnToIndex}/>
        </>
    )
}

export default CharacterEditor
