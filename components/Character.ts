import { RaceId } from "../datasets/Races";
import { ClassId } from "../datasets/Classes";
import { v4 as uuid } from "uuid"
import { SexId } from "../datasets/Sex";
import { StatId } from "../datasets/Stats";
import { ClassList, StatList } from "../datasets/computed/enumerator";
import { GetStatPointCost } from "./StatUtil";
import _ from "lodash";

type StatMap = { [stat in StatId]: number }
type ClassMap = { [_class in ClassId]: number }

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
    classes: ClassMap
    /**
     * Integer representing level of this character
     */
    level: number
    /**
     * Stat map of initial bought stats
     *
     * @note Stat values are recorded without racial bonuses
     */
    stats: StatMap
}

export const DEFAULT_STAT_VALUE = 8
export const CHARACTER_BASE_DISTRIBUTABLE_POINTS = 27

export const calculateDistributedPoints = ({stats}: Character): number => {
    let result = 0;
    for(const statId of StatList) {
        result += GetStatPointCost(stats[statId as StatId])
    }
    return result
}

export const calculateSpentClassPoints = ({classes}: Character): number =>
    _(classes).values().sum()

const defaultMap = <T, K>(list: T[]) => (defaultValue: number) => <K><unknown>list.reduce((prev, id) => ({
    ...prev,
    [<any>id]: defaultValue
}), <K>{})

export const defaultStatMap = defaultMap<StatId, StatMap>(StatList)
export const defaultClassMap = defaultMap<ClassId, ClassMap>(ClassList)

export const emptyCharacter = (): Character => ({
    id: uuid(),

    name: "",
    sex: SexId.NOT_SELECTED,

    level: 3,

    race: RaceId.NOT_SELECTED,
    classes: defaultClassMap(0),

    stats: defaultStatMap(DEFAULT_STAT_VALUE),
})
