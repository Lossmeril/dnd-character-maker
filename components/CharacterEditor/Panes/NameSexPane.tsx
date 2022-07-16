import { EditorPane } from "./EditorPane";
import {
    Box,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    HStack,
    Icon,
    Input,
    useRadioGroup
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SexId } from "../../../datasets/Sex";
import RadioCard from "../../Util/RadioCard";
import { MdFemale, MdMale } from "react-icons/md";
import PaneCard from "./PaneCard";

type SexSelectProps = {
    currentSex: SexId,
    onSexChanged: (newSex: SexId) => void
}
const SexSelect = ({currentSex, onSexChanged}: SexSelectProps) => {
    const {getRootProps, getRadioProps, setValue} = useRadioGroup({
        name: 'character sex',
        defaultValue: currentSex.toString(),
        onChange: (newVal) => onSexChanged(parseInt(newVal)),
    })
    // must be present because of next.js client hydration
    useEffect(() => {
        setValue(currentSex.toString())
    })

    const group = getRootProps()

    const maleRadio = getRadioProps({value: SexId.Male.toString()})
    const femaleRadio = getRadioProps({value: SexId.Female.toString()})

    return (
        <HStack {...group}>
            <RadioCard {...maleRadio}>
                <Icon as={MdMale}></Icon>
                Man
            </RadioCard>
            <RadioCard {...femaleRadio}>
                <Icon as={MdFemale}></Icon>
                Woman
            </RadioCard>
        </HStack>
    )
}

const NameSexPane: EditorPane = ({character, onCharacterModified}) => {
    const setName = (newName: string) =>
        onCharacterModified({...character, name: newName})
    const setSex = (newSex: SexId) =>
        onCharacterModified({...character, sex: newSex})

    return (
        <PaneCard title="Sex && Name">
            <FormControl>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input
                    id='name' type='text' placeholder="Let the journey begin!"
                    value={character.name} onChange={e => setName(e.target.value)}
                />
                <FormHelperText>Enter your super epic character name!</FormHelperText>
            </FormControl>
            <FormControl mt={6}>
                <FormLabel>Sex</FormLabel>
                <SexSelect currentSex={character.sex} onSexChanged={setSex}></SexSelect>
            </FormControl>
        </PaneCard>
    )
}

export default NameSexPane
