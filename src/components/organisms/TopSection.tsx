import { VStack, Heading, Box } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

type Props = {
    title: string;
    children: ReactNode;
};

export const TopSection:FC<Props> = memo((props) => {
    const { title, children } = props;

    return (
        <>
            {/* Section */}
            <VStack>
                <Heading>{ title }</Heading>
                <Box>
                    { children }
                </Box>
            </VStack>
        </>
    );
});