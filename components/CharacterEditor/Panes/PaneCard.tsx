import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";

type PaneCardProps = {
    title: string,
    children: React.ReactNode
}

const PaneCard = ({title, children}: PaneCardProps) => {
    return (
        // <Container mt="4%" height="90%">
        <Box
            paddingInlineStart={4}
            paddingInlineEnd={4}
            height="92%"
            my="4%"
        >
            <Box
                borderWidth='1px' borderRadius='lg' overflow='hidden'
                p={6}
                boxSizing="border-box"
                height="100%"
            >
                <Heading as="h3">{title}</Heading>

                <Box mt={6} height="100%">
                    {children}
                </Box>
                <Box>

                </Box>
            </Box>
        </Box>
        // </Container>
    )
}

export default PaneCard
