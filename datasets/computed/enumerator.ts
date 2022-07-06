import { RaceId } from "../races";
import { SkillId } from "../skills";
import { StatId } from "../stats";


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

export const RaceList = makeList(RaceId)
export const SkillList = makeList(SkillId)
export const StatList = makeList(StatId)
