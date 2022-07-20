import { Character } from "../../Character";

export type EditorPaneProps = {
    character: Character,
    onCharacterModified: (modifiedCharacter: Character) => void,
    onNavigateBack: () => void,
    onNavigateForward: () => void,
    onComplete: () => void
}

export type EditorPane = (props: EditorPaneProps) => JSX.Element
