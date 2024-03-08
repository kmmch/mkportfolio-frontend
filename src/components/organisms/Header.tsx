import { FC, memo } from "react";
import { Box, Heading } from '@chakra-ui/react'
import { BasicContainer } from "../atoms/BasicContainer";

export const Header: FC = memo(() => {
    return (
        <>
            <Box py={7} backgroundColor={'teal.500'}>
                <BasicContainer>
                    <Heading as='h1' 
                        color={'white'}
                    >Mochiken's Portfolio</Heading>
                </BasicContainer>
            </Box>
        </>
    );
});