import { FC, memo } from "react";
import styled from "styled-components";

const SBr = styled.br`
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const StyledBr: FC = memo(() => {

    return (
        <>
            <SBr />
        </>
    );
});