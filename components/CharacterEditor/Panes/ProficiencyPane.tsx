import { EditorPane } from "./EditorPane";
import PaneCard from "./PaneCard";
import { getAvailableProficiencies } from "../../Character";
import { Wrap, Text } from "@chakra-ui/react";
import { FindSkillDetail } from "../../../datasets/computed/details";
import { SkillId } from "../../../datasets/Skills";
import Bold from "../../Bold";
import ManySelect from "../../ManySelect";


const ProficiencyPane: EditorPane = ({character, onCharacterModified}) => {
    const availableProficiencies =
        getAvailableProficiencies(character)

    const profClick = (skillId: SkillId) => () => {
        if(character.proficiencies.includes(skillId)) {
            onCharacterModified({
                ...character,
                proficiencies: character
                    .proficiencies
                    .filter(thisSkillId => thisSkillId != skillId)
            })
        } else if(character.proficiencies.length <= character.level) {
            onCharacterModified({
                ...character,
                proficiencies: [...character.proficiencies, skillId]
            })
        }
    }

    return (
        <PaneCard title="Proficiency">
            <Wrap>
                {availableProficiencies.map(skillId => {
                    const skill = FindSkillDetail(skillId)

                    return (
                        <ManySelect key={skillId}
                                    title={skill.name} subTitle={skill.description}
                                    selected={character.proficiencies.includes(skillId)}
                                    onClick={profClick(skillId)}></ManySelect>
                    )
                })}
            </Wrap>
            <Text mt={4}>
                Zbývající body:
                <Bold> {character.level - character.proficiencies.length}</Bold>
            </Text>
        </PaneCard>
    )
}

export default ProficiencyPane
