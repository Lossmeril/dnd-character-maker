import { RaceDetails } from "../RaceDetails";
import { SkillDetails } from "../SkillDetails";
import { StatDetails } from "../StatDetails";
import { ClassDetails } from "../ClassDetails";

function makeDetailFinder<V, Key extends keyof V>(data: V) {
    return (id: Key): V[Key] => {
        return data[id];
    }
}

export const FindRaceDetail = makeDetailFinder(RaceDetails)
export const FindSkillDetail = makeDetailFinder(SkillDetails)
export const FindStatDetail = makeDetailFinder(StatDetails)
export const FindClassDetail = makeDetailFinder(ClassDetails)
