import { RaceName } from "../races";
import { SkillName } from "../skills";
import { StatName } from "../stats";


function makeList<T, K extends keyof T>(e: T): number[] {
    const res: number[] = []

    for(const enumMember in e) {
        const enumMemberInt = parseInt(enumMember, 10)
        const isValueProperty = enumMemberInt >= 0

        if(isValueProperty) {
            res.push(enumMemberInt)
        }
    }

    return res
}

export const RaceList = makeList(RaceName)
export const SkillList = makeList(SkillName)
export const StatList = makeList(StatName)
