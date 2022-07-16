import { Character } from "../../Character";

export type EditorPaneProps = {
    character: Character,
    onCharacterModified: (modifiedCharacter: Character) => void,
    settings: {}
}

export type EditorPane = (props: EditorPaneProps) => JSX.Element
