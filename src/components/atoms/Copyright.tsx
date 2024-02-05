import { Text } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Copyright: FC = memo(() => {

    const now = new Date();
    const year = now.getFullYear();

    return (
        <>
            <Text>COPYRIGHT © {year} MASAYA KEMMOCHI. <br />ALL RIGHTS RESERVED.</Text>
        </>
    );
});