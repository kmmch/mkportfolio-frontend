import { FC, memo } from "react";
import { Box } from "@chakra-ui/react";

import { Copyright } from "../atoms/Copyright";
import { BasicContainer } from "../atoms/BasicContainer";

export const Footer: FC = memo(() => {
    return (
        <>
            <Box py={7}>
                <BasicContainer>
                    <Copyright />
                </BasicContainer>
            </Box>
        </>
    );
});