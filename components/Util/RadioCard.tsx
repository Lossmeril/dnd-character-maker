import { useRadio, UseRadioProps } from "@chakra-ui/radio";
import { Box } from "@chakra-ui/react";
import React from "react";

interface RadioCardProps extends UseRadioProps {
    children: React.ReactNode
}

const RadioCard = (props: RadioCardProps) => {
    const {getInputProps, getCheckboxProps} = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='2px'
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: 'teal.600',
                    color: 'white',
                    borderColor: 'teal.600',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}

export default RadioCard
