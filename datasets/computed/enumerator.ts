import * as Races from "../races"
import * as Skills from "../skills"
import * as Stats from "../stats"

function makeList(obj: { [key: string]: string }): string[] {
    return Object.getOwnPropertyNames(obj).filter(name => name != "__esModule")
}

export const RaceList = makeList(Races)
export const SkillList = makeList(Skills)
export const StatList = makeList(Stats)
