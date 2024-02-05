import { Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import styled from "styled-components";

const StyledCopyrightBr = styled.br`
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const Copyright: FC = memo(() => {

    const now = new Date();
    const year = now.getFullYear();

    return (
        <>
            <Text>COPYRIGHT © {year} MASAYA KEMMOCHI. <StyledCopyrightBr />ALL RIGHTS RESERVED.</Text>
        </>
    );
});