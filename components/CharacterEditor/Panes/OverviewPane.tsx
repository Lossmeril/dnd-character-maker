import { EditorPane } from "./EditorPane";
import PaneCard from "./PaneCard";
import React from "react";
import CharacterOverview from "../../CharacterOverview";


const OverviewPane: EditorPane = ({character, onNavigateBack}) => {
    return (
        <PaneCard title="Overview" onNavigateBack={onNavigateBack}>
            <CharacterOverview character={character}/>
        </PaneCard>
    )
}

export default OverviewPane

