import { Box, Center, Container, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Footer:FC = memo(() => {
    return (
        <>
            <Box py="10" bg="gray.600">
                <Container>
                    <Center>
                        <Text fontSize="14px" color="white">© 2023 Masaya Kemmochi All Rights Reserved.</Text>
                    </Center>
                </Container>
            </Box>
        </>
    );
});