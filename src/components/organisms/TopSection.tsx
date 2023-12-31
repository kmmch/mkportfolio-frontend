import { Center, Heading, VStack, Text, Box, Container, Flex } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

type Props = {
    title: string;
    description?: string;
    children: ReactNode;
};

export const TopSection:FC<Props> = memo((props) => {
    const { children, title, description } = props;
    return (
        <>
            <Center py="75px">
                <Box w={["1200px"]}>
                    <VStack>
                        <Heading>{ title }</Heading>
                        <Text>{ description }</Text>
                        <Box my="20px">{ children }</Box>
                    </VStack>
                </Box>
            </Center>
        </>
    );
});