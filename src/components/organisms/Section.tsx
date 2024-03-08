import { Box, Heading, Text } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

type Props = {
    children: ReactNode;
    title?: string;
    description?: string;
};

export const Section: FC<Props> = memo((props) => {
    const { children, title, description } = props;

    const anchorLink = title ? title?.toLowerCase() : null;

    return (
        <>
            { anchorLink ? (
                <Box py='50px' id={ anchorLink }>
                    { title && <Heading as='h2' textAlign='center'>{ title }</Heading>}
                    { description && <Text mt={2} mb={5} textAlign='center'>{ description }</Text> }
                    { children }      
                </Box>
            ) : (
                <Box py='50px'>
                    { title && <Heading as='h2' textAlign='center'>{ title }</Heading>}
                    { description && <Text mt={2} mb={5} textAlign='center'>{ description }</Text> }
                    { children }      
                </Box>
            )}
            {/*  */}
        </>
    );
});