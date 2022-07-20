import { EditorPane } from "./EditorPane";
import PaneCard from "./PaneCard";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FindClassDetail, FindRaceDetail, FindSexDetail, FindStatDetail } from "../../../datasets/computed/details";
import { ClassId } from "../../../datasets/Classes";
import _ from "lodash";
import { StatId } from "../../../datasets/Stats";

type OverviewFieldProps = {
    label: string,
    children: React.ReactNode
}

const OverviewField = ({label, children}: OverviewFieldProps) => (
    <Box mt={2}>
        <Text size="larger" fontWeight="bold">{label}</Text>
        <Box>{children}</Box>
    </Box>
)

const OverviewPane: EditorPane = ({character}) => {
    return (
        <PaneCard title="Overview">
            <OverviewField label="Jméno">{character.name}</OverviewField>
            <OverviewField label="Pohlaví">{FindSexDetail(character.sex).name}</OverviewField>
            <OverviewField label="Rasa">{FindRaceDetail(character.race).name}</OverviewField>
            <OverviewField label="Úroveň">{character.level}</OverviewField>
            <OverviewField label="Povolání">
                {
                    _(character.classes)
                        .entries()
                        .filter(([_, level]) => level > 0)
                        .map(([classId, level]) => (
                            <Text key={classId}>
                                {FindClassDetail(classId as unknown as ClassId).name} (úroveň {level})
                            </Text>
                        )).toJSON()
                }
            </OverviewField>
            <OverviewField label="Staty">
                {
                    _(character.stats)
                        .entries()
                        .map(([statId, level]) => (
                            <Text key={statId}>
                                {FindStatDetail(statId as unknown as StatId).name}: {level}
                            </Text>
                        )).toJSON()
                }
            </OverviewField>
        </PaneCard>
    )
}

export default OverviewPane

