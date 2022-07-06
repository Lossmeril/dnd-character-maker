import { RaceDetails } from "../race_details";
import { SkillDetails } from "../skill_details";
import { StatDetails } from "../stat_details";

function makeDetailFinder<V, Key extends keyof V>(data: V) {
    return (id: Key): V[Key] => {
        return data[id];
    }
}

export const RaceDetailFinder = makeDetailFinder(RaceDetails)
export const SkillDetailFinder = makeDetailFinder(SkillDetails)
export const StatDetailFinder = makeDetailFinder(StatDetails)
