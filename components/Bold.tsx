import React from "react";
import { Text } from "@chakra-ui/react";

type BoldProps = {
    children: React.ReactNode
}

const Bold = ({children}: BoldProps) => (<Text as="span" fontWeight="bold">{children}</Text>)

export default Bold
