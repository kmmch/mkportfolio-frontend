import { FC, memo } from "react";
import { Heading } from '@chakra-ui/react'

export const Header: FC = memo(() => {
    return (
        <>
            <Heading as='h1'>Mochiken's Portfolio</Heading>
        </>
    );
});