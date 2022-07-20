import { Box, Button, Container, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { MdCheckCircle, MdDangerous } from "react-icons/md";
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
    onPhaseSelected: (phase: CharacterEditorPhase) => void
    onComplete: () => void,
    nameSexGood: boolean,
    raceGood: boolean,
    statsGood: boolean,
    classGood: boolean,
    proficiencyGood: boolean,
    specialAbilitiesGood: boolean,
    allGood: boolean,
}

const PhaseOverview = ({
                           nameSexGood, raceGood,
                           statsGood, classGood,
                           proficiencyGood, specialAbilitiesGood,
                           allGood,
                           onPhaseSelected,
                           onComplete,
                       }: PhaseOverviewProps) => {


    const selectPhase = (phase: CharacterEditorPhase) => () => onPhaseSelected(phase)

    return (
        <Container
            borderWidth='1px' borderRadius='lg' overflow='hidden'
            //@ts-ignore
            marginTop={{base: null, md: 6}}
            px={4} py={4}
            // width={{base: "100%", md: "fit-content"}}
            width="100%"
        >

            <List spacing={3} mx={4}>
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
                <PhaseLine ok={proficiencyGood}
                           name={"Proficiency"}
                           onClick={selectPhase(CharacterEditorPhase.Proficiency)}></PhaseLine>
                <PhaseLine ok={specialAbilitiesGood}
                           name={"Special Abilities"}
                           onClick={selectPhase(CharacterEditorPhase.SpecialAbilities)}></PhaseLine>
                <PhaseLine ok={allGood}
                           name={"Overview"}
                           onClick={selectPhase(CharacterEditorPhase.Overview)}></PhaseLine>
            </List>
            {allGood &&
                <Flex mt={3} direction="column">
                    <Button onClick={onComplete} colorScheme="green">Save</Button>
                </Flex>
            }
        </Container>
    )
}

export default PhaseOverview
