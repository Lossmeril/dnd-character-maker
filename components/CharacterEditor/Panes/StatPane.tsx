import { EditorPane } from "./EditorPane";
import PaneCard from "./PaneCard";
import { FindStatDetail } from "../../../datasets/computed/details";
import { StatList } from "../../../datasets/computed/enumerator";
import {
    Box,
    Button,
    Flex,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
    SliderTrack,
    Text, Tooltip
} from "@chakra-ui/react";
import { StatId } from "../../../datasets/Stats";
import {
    calculateDistributedPoints,
    calculateTotalDistributablePoints,
    Character,
    defaultStatMap
} from "../../Character";
import Bold from "../../Bold";
import { useState } from "react";

type StatSliderProps = {
    statId: StatId,
    character: Character,
    onStatChange: (newValue: number) => void
}

const StatSlider = ({statId, character, onStatChange}: StatSliderProps) => {
    const stat = FindStatDetail(statId)
    const statValue = character.stats[statId]

    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <Box>
            <Flex justifyContent="space-between">
                <Text>{stat.name}</Text>
                <Text><Bold>{statValue}</Bold></Text>
            </Flex>
            <Slider step={1} min={1} max={20}
                    value={statValue}
                    colorScheme="teal"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    onChange={onStatChange}>
                <SliderTrack>
                    <SliderFilledTrack/>
                </SliderTrack>
                <SliderThumb/>
                <Tooltip
                    hasArrow
                    bg="teal.500"
                    color='white'
                    placement='top'
                    isOpen={showTooltip}
                    label={`${statValue}`}
                >
                    <SliderThumb/>
                </Tooltip>
            </Slider>
        </Box>
    )
}

const StatPane: EditorPane = ({character, onCharacterModified}) => {
    const totalDistributablePoints = calculateTotalDistributablePoints(character)
    const alreadyDistributedPoints = calculateDistributedPoints(character)

    const resetStats = () => {
        onCharacterModified({
            ...character,
            stats: defaultStatMap()
        })
    }

    const changeStat = (statId: StatId) => (newValue: number) => {
        const valueDelta = newValue - character.stats[statId]

        if(valueDelta > 0) {
            if(alreadyDistributedPoints + valueDelta > totalDistributablePoints) {
                return;
            }
        }

        onCharacterModified({
            ...character,
            stats: {
                ...character.stats,
                [statId]: newValue
            },
        })
    }

    return (
        <PaneCard title="Stats">
            {StatList.map((statId) =>
                (<StatSlider
                    key={statId}
                    character={character}
                    statId={statId}
                    onStatChange={changeStat(statId)}
                ></StatSlider>)
            )}
            <Flex justifyContent="space-between" mt={4}>
                <Text>Zbývající body:
                    <Bold> {totalDistributablePoints - alreadyDistributedPoints}</Bold>
                </Text>
                <Button onClick={resetStats} colorScheme="red">Reset</Button>
            </Flex>
        </PaneCard>
    )
}

export default StatPane
