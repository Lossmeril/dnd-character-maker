import { RaceId } from "../datasets/Races";
import { ClassId } from "../datasets/Classes";
import { v4 as uuid } from "uuid"
import { SexId } from "../datasets/Sex";
import { StatId } from "../datasets/Stats";
import { ClassList, StatList } from "../datasets/computed/enumerator";
import { GetStatPointCost } from "./StatUtil";
import _ from "lodash";
import { FindClassDetail, FindRaceDetail } from "../datasets/computed/details";
import { SkillId } from "../datasets/Skills";
import { SpecialAbilityId } from "../datasets/SpecialAbility";

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
    /**
     * List of skills character is proficient in
     */
    proficiencies: SkillId[]
    /**
     * List of characters special abilities
     */
    specialAbilities: SpecialAbilityId[]
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

export const calculateResultStatValue = ({race, stats}: Character, statId: StatId): number => {
    const baseValue = stats[statId];
    const modifiers = _(FindRaceDetail(race).modifiers)
        .filter(([thiStatId, _]) => thiStatId == statId)
        .map(([_, howMuch]) => howMuch)
        .first() ?? 0

    return baseValue + modifiers
}

export const getAvailableProficiencies = ({classes}: Character): SkillId[] =>
    _(classes)
        .entries()
        .filter(([_, value]) => value > 0)
        .map(([classId, _]) => classId as unknown as number)
        .map(id => FindClassDetail(id))
        .flatMap(class_ => class_.availableProficiencies)
        .value()

export const getAvailableSpecialAbilities = ({classes}: Character): SpecialAbilityId[] =>
    _(classes)
        .entries()
        .filter(([_, value]) => value > 0)
        .map(([classId, _]) => classId as unknown as number)
        .map(id => FindClassDetail(id))
        .flatMap(class_ => class_.availableSpecialAbilities)
        .value()

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
    proficiencies: [],
    specialAbilities: []
})
