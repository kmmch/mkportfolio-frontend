import { FC, memo } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: red;
`;

export const Header: FC = memo(() => {
    return (
        <>
            <StyledHeader>
                <p>aaaaa</p>
            </StyledHeader>
        </>
    );
});