import { Text } from "@chakra-ui/react";
import { FC, memo } from "react";
// import { StyledBr } from "../styled/StyledBr";


export const Copyright: FC = memo(() => {

    const now = new Date();
    const year = now.getFullYear();

    return (
        <>
            <Text
                textAlign='center'
                fontSize='sm'
                color='white'
            >COPYRIGHT © {year} MASAYA KEMMOCHI. <br />ALL RIGHTS RESERVED.</Text>
        </>
    );
});