import { FC, memo } from "react";
import { Box, Center, Heading } from '@chakra-ui/react'
import { BasicContainer } from "../atoms/BasicContainer";

export const Header: FC = memo(() => {
    return (
        <>
            {/* <Box backgroundColor='gray.400'>
                <BasicContainer bColor='gray.300'> */}
            <Box py={7}>
                <BasicContainer>
                    <Center>
                        <Heading as='h1'>Mochiken's Portfolio</Heading>
                    </Center>
                </BasicContainer>
            </Box>
        </>
    );
});