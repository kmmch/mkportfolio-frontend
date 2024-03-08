import { Box, Heading, Text } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

type Props = {
    children: ReactNode;
    title?: string;
    description?: string;
    firstSection?: boolean;
};

export const Section: FC<Props> = memo((props) => {
    const { children, title, description, firstSection=false } = props;

    const anchorLink = title ? title?.toLowerCase() : null;

    const sectionTopPadding = firstSection ? 50 : 110;

    return (
        <>
            { anchorLink ? (
                <Box pt={`${sectionTopPadding}px`} pb='50px' id={ anchorLink }>
                    { title && <Heading as='h2' textAlign='center'>{ title }</Heading>}
                    { description && <Text mt={2} mb={5} textAlign='center'>{ description }</Text> }
                    { children }      
                </Box>
            ) : (
                <Box pt={`${sectionTopPadding}px`} pb='50px'>
                    { title && <Heading as='h2' textAlign='center'>{ title }</Heading>}
                    { description && <Text mt={2} mb={5} textAlign='center'>{ description }</Text> }
                    { children }      
                </Box>
            )}
            {/*  */}
        </>
    );
});