import { Box, Center, Heading, VStack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {};

export const MainVisual:FC<Props> = memo((props) => {
    return (
        <>
            <Box h="100vh">
                <Center h="100%">
                    <VStack>
                        <Heading as="h1">MochiLog</Heading>
                        <Text>エンジニアもちけんのポートフォリオサイトへようこそ！</Text>
                    </VStack>
                </Center>
            </Box>
        </>
    );
});