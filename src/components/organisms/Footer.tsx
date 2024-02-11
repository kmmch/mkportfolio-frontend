import { FC, memo } from "react";
import { Box } from "@chakra-ui/react";

import { Copyright } from "../atoms/Copyright";
import { BasicContainer } from "../atoms/BasicContainer";

export const Footer: FC = memo(() => {
    return (
        <>
            {/* <Box backgroundColor='gray.600'>
                <BasicContainer bColor='gray.500'> */}
            <Box>
                <BasicContainer>
                    <Copyright />
                </BasicContainer>
            </Box>
        </>
    );
});