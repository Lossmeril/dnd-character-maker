import { EditorPane } from "./EditorPane";
import PaneCard from "./PaneCard";
import { getAvailableSpecialAbilities } from "../../Character";
import { Wrap, Text } from "@chakra-ui/react";
import { FindSpecialAbilityDetail } from "../../../datasets/computed/details";
import Bold from "../../Bold";
import ManySelect from "../../ManySelect";
import { SpecialAbilityId } from "../../../datasets/SpecialAbility";


const SpecialAbilityPane: EditorPane = ({
                                            character, onCharacterModified,
                                            onNavigateBack, onNavigateForward
                                        }) => {
    const availableSpecialAbilities =
        getAvailableSpecialAbilities(character)

    const specialAbilityClicked = (specialAbilityId: SpecialAbilityId) => () => {
        if(character.specialAbilities.includes(specialAbilityId)) {
            onCharacterModified({
                ...character,
                specialAbilities: character
                    .specialAbilities
                    .filter(thisSpecialAbilityId => thisSpecialAbilityId != specialAbilityId)
            })
        } else if(character.specialAbilities.length <= character.level) {
            onCharacterModified({
                ...character,
                specialAbilities: [...character.specialAbilities, specialAbilityId]
            })
        }
    }

    return (
        <PaneCard title="Special" onNavigateBack={onNavigateBack} onNavigateForward={onNavigateForward}>
            <Wrap>
                {availableSpecialAbilities.map(specialAbilityId => {
                    const specialAbility = FindSpecialAbilityDetail(specialAbilityId)

                    return (
                        <ManySelect key={specialAbilityId}
                                    title={specialAbility.name} subTitle={specialAbility.description}
                                    selected={character.specialAbilities.includes(specialAbilityId)}
                                    onClick={specialAbilityClicked(specialAbilityId)}></ManySelect>
                    )
                })}
            </Wrap>
            <Text mt={4}>
                Zbývající body:
                <Bold> {character.level - character.specialAbilities.length}</Bold>
            </Text>
        </PaneCard>
    )
}

export default SpecialAbilityPane
