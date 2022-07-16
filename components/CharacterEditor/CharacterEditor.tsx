import { Character } from "../Character";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import PhaseOverview from "./PhaseOverview";
import { CharacterEditorPhase } from "./Phases";
import { EditorPane } from "./Panes/EditorPane";
import NameSexPane from "./Panes/NameSexPane";
import RacePane from "./Panes/RacePane";
import ClassPane from "./Panes/ClassPane";
import usePersistentState from "../PersistentPane";
import StatPane from "./Panes/StatPane";

type CharacterEditorProps = {
    character: Character,
    onCharacterModified: (character: Character) => void
}

const CharacterEditor = ({character, onCharacterModified}: CharacterEditorProps) => {
    const [currentPhase, setCurrentPhase] = usePersistentState("character-editor.phase", CharacterEditorPhase.NameSex)

    const editorPanes: { [key in CharacterEditorPhase]: EditorPane } = {
        [CharacterEditorPhase.NOT_SELECTED]: () => (<></>),
        [CharacterEditorPhase.NameSex]: NameSexPane,
        [CharacterEditorPhase.Race]: RacePane,
        [CharacterEditorPhase.Class]: ClassPane,
        [CharacterEditorPhase.Skill]: () => (<></>),
        [CharacterEditorPhase.Stat]: StatPane,
    }

    return (
        <Grid
            // @ts-ignore tis correct
            height={{base: null, md: "100vh"}}
            templateAreas={{
                base: `"content" "overview"`,
                md: `"overview content"`
            }}
            // @ts-ignore tis correct
            gridTemplateColumns={{base: null, md: "26% 70%"}}
        >

            <GridItem area='content'>
                <Box
                    // @ts-ignore tis correct
                    height={{base: null, md: "100vh"}}
                    overflowY="hidden">

                    {editorPanes[currentPhase]({
                        character, onCharacterModified, settings: {}
                    })}
                </Box>
            </GridItem>
            <GridItem area='overview'
                      px={4}
                // @ts-ignore tis correct
                      margin={{base: null, md: "auto"}}>
                <PhaseOverview character={character} onPhaseSelected={setCurrentPhase}/>
            </GridItem>
        </Grid>
    )
}

export default CharacterEditor
