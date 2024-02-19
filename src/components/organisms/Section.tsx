import { Box, Heading, Text } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

type Props = {
    children: ReactNode;
    title?: string;
    description?: string;
};

export const Section: FC<Props> = memo((props) => {
    const { children, title, description } = props;

    return (
        <>
            <Box py='50px'>
                { title && <Heading as='h2' textAlign='center'>{ title }</Heading>}
                { description && <Text mt={2} textAlign='center'>{ description }</Text> }
                { children }      
            </Box>
        </>
    );
});