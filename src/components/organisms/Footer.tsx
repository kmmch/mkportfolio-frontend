import { FC, memo } from "react";
import { Center } from "@chakra-ui/react";

import { Copyright } from "../atoms/Copyright";

export const Footer: FC = memo(() => {
    return (
        <>
            <Center>
                <Copyright />
            </Center>
        </>
    );
});