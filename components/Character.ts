import { RaceId } from "../datasets/Races";
import { ClassId } from "../datasets/Classes";
import { v4 as uuid } from "uuid"
import { SexId } from "../datasets/Sex";
import { StatId } from "../datasets/Stats";
import { StatList } from "../datasets/computed/enumerator";

type StatMap = { [stat in StatId]: number }

export type Character = {
    /**
     * UUID of the character
     */
    id: string
    /**
     * Name of the character
     */
    name: string
    /**
     * Sex of the character
     */
    sex: SexId
    /**
     * Race of the character
     */
    race: RaceId
    /**
     * Classes of the character
     */
    classes: ClassId[]
    /**
     * Integer representing level of this character
     */
    level: number
    /**
     * Stat map
     *
     * @note Stat values are recorded without racial bonuses
     */
    stats: StatMap
}

export const DEFAULT_STAT_VALUE = 8
export const BASE_CHARACTER_DISTRIBUTABLE_POINTS = 10

export const calculateTotalDistributablePoints = ({level}: Character): number =>
    BASE_CHARACTER_DISTRIBUTABLE_POINTS + level

export const calculateDistributedPoints = (character: Character): number => {
    let result = 0;
    for(const statId of StatList) {
        result += character.stats[statId as StatId] - DEFAULT_STAT_VALUE
    }
    return result
}

export const defaultStatMap = (): StatMap => <StatMap><unknown>StatList.reduce((prev, statId) => ({
    ...prev,
    [statId]: DEFAULT_STAT_VALUE
}), {})

export const emptyCharacter = (): Character => ({
    id: uuid(),

    name: "",
    sex: SexId.NOT_SELECTED,

    level: 3,

    race: RaceId.NOT_SELECTED,
    classes: [],

    stats: defaultStatMap()
})
