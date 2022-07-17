import { Container, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { MdCheckCircle, MdDangerous } from "react-icons/md";
import NOT_SELECTED_ID from "../../datasets/NotSelected";
import {
    calculateDistributedPoints,
    calculateSpentClassPoints,
    Character,
    CHARACTER_BASE_DISTRIBUTABLE_POINTS
} from "../Character";
import { CharacterEditorPhase } from "./Phases";

type PhaseLineProps = {
    ok: boolean,
    name: string,
    onClick: () => void
}

const PhaseLine = ({ok, name, onClick}: PhaseLineProps) => (
    <ListItem
        onClick={onClick}
        _hover={{
            cursor: "pointer",
            textDecoration: "underline"
        }}
    >
        <ListIcon as={ok ? MdCheckCircle : MdDangerous} color={ok ? 'green.500' : 'red.500'}/>
        <Text as="span" color={ok ? 'green.500' : 'red.500'}>{name}</Text>
    </ListItem>
)

type PhaseOverviewProps = {
    character: Character,
    onPhaseSelected: (phase: CharacterEditorPhase) => void
}

const PhaseOverview = ({character, onPhaseSelected = () => null}: PhaseOverviewProps) => {
    const nameSexGood = character.name.length > 0 && character.sex != NOT_SELECTED_ID
    const raceGood = character.race != NOT_SELECTED_ID
    const statsGood = (calculateDistributedPoints(character) - CHARACTER_BASE_DISTRIBUTABLE_POINTS) === 0
    const classGood = calculateSpentClassPoints(character) == character.level

    const selectPhase = (phase: CharacterEditorPhase) => () => onPhaseSelected(phase)

    return (
        <Container
            borderWidth='1px' borderRadius='lg' overflow='hidden'
            //@ts-ignore
            marginTop={{base: null, md: 6}}
            py={1} pl={4} pr={6}
            width={{base: "100%", md: "fit-content"}}
        >

            <List spacing={3}>
                <PhaseLine ok={nameSexGood}
                           name={"Name && Sex"}
                           onClick={selectPhase(CharacterEditorPhase.NameSex)}></PhaseLine>
                <PhaseLine ok={raceGood}
                           name={"Race"}
                           onClick={selectPhase(CharacterEditorPhase.Race)}></PhaseLine>
                <PhaseLine ok={statsGood}
                           name={"Stats"}
                           onClick={selectPhase(CharacterEditorPhase.Stat)}></PhaseLine>
                <PhaseLine ok={classGood}
                           name={"Class"}
                           onClick={selectPhase(CharacterEditorPhase.Class)}></PhaseLine>
            </List>
        </Container>
    )
}

export default PhaseOverview
