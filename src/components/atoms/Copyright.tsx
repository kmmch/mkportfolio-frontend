import { FC, memo } from "react";
import styled from "styled-components";

const StyledCopyrightText = styled.p`
    text-align: center;
`;

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
            <StyledCopyrightText>COPYRIGHT © {year} MASAYA KEMMOCHI. <StyledCopyrightBr />ALL RIGHTS RESERVED.</StyledCopyrightText>
        </>
    );
});