import { RaceDetails } from "../RaceDetails";
import { SkillDetails } from "../SkillDetails";
import { StatDetails } from "../StatDetails";
import { ClassDetails } from "../ClassDetails";
import { AbilityDetails } from "../AbilityDetails";
import { SexDetails } from "../SexDetails";
import { SpecialAbilityDetails } from "../SpecialAbilityDetail";

function makeDetailFinder<V, Key extends keyof V>(data: V) {
    return (id: Key): V[Key] => {
        return data[id];
    }
}

export const FindRaceDetail = makeDetailFinder(RaceDetails)
export const FindSkillDetail = makeDetailFinder(SkillDetails)
export const FindStatDetail = makeDetailFinder(StatDetails)
export const FindClassDetail = makeDetailFinder(ClassDetails)
export const FindAbilityDetail = makeDetailFinder(AbilityDetails)
export const FindSpecialAbilityDetail = makeDetailFinder(SpecialAbilityDetails)
export const FindSexDetail = makeDetailFinder(SexDetails)
