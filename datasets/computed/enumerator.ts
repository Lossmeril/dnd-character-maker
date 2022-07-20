import { RaceId } from "../Races";
import { SkillId } from "../Skills";
import { StatId } from "../Stats";
import { ClassId } from "../Classes";
import { AbilityId } from "../Ability";
import { SexId } from "../Sex";
import { SpecialAbilityId } from "../SpecialAbility";


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
export const ClassList = makeList(ClassId)
export const AbilityList = makeList(AbilityId)
export const SpecialAbilityList = makeList(SpecialAbilityId)
export const SexList = makeList(SexId)
