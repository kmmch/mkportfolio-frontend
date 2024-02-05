import { FC, memo } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    padding: 20px 0;
`;

const StyledHeaderWrapper = styled.div`
    margin: 0 auto;
    width: 95%;
    display: flex;
    // justify-content: space-between;
    justify-content: center;
`;

const StyledHeaderTtl = styled.h1`
    font-weight: bold;
`;

const StyledHamburgerBtn = styled.div`
    // position:fixed;
    // z-index: 9999;
    // top:10px;
    // right: 10px;
    // cursor: pointer;
    // width: 50px;
    // height:50px;
`;

export const Header: FC = memo(() => {
    return (
        <>
            <StyledHeader>
                <StyledHeaderWrapper>
                    <StyledHeaderTtl>Mochiken's Portfolio</StyledHeaderTtl>
                    {/* <StyledHamburgerBtn>
                        aaa
                    </StyledHamburgerBtn> */}
                </StyledHeaderWrapper>
            </StyledHeader>
        </>
    );
});