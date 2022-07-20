import { Box, Text } from "@chakra-ui/react";

type ManySelectProps = {
    title: string,
    subTitle: string,
    selected: boolean,
    onClick: () => void
}

const ManySelect = ({title, subTitle, onClick, selected}: ManySelectProps) => {
    const boxColor = selected ? "teal.500" : null
    const textColor = selected ? "white" : null

    return (
        <Box
            borderWidth='1px' borderRadius='lg' overflow='hidden'
            p={4} boxSizing="border-box"
            cursor="pointer"
            //@ts-ignore
            backgroundColor={boxColor}
            onClick={onClick}>
            <Text
                //@ts-ignore
                fontWeight="bold" color={textColor}
                userSelect="none"
            >{title}</Text>

            <Text fontSize="smaller" fontStyle="italic"
                //@ts-ignore
                  color={textColor}
                  userSelect="none"
            >{subTitle}</Text>
        </Box>
    )
}

export default ManySelect
