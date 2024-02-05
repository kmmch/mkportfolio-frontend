import { FC, memo } from "react";
import styled from "styled-components";
import { Copyright } from "../atoms/Copyright";

const StyledFooter = styled.footer`
`;

const StyledFooterWrapper = styled.div`
    margin: 0 auto;
    width: 95%;
`;

export const Footer: FC = memo(() => {
    return (
        <>
            <StyledFooter>
                <StyledFooterWrapper>
                    <Copyright />
                </StyledFooterWrapper>
            </StyledFooter>
        </>
    );
});