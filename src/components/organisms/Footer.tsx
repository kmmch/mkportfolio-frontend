import { FC, memo } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: blue;
`;

export const Footer: FC = memo(() => {
    return (
        <>
            <StyledFooter>
                <p>aaaaa</p>
            </StyledFooter>
        </>
    );
});