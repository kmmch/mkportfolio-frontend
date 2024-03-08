import { FC, ReactNode, memo } from "react";
import { Box } from "@chakra-ui/react";

import { Footer } from "../organisms/Footer";
import { BasicContainer } from "../atoms/BasicContainer";
import { MenuHeader } from "../organisms/MenuHeader";

type Props = {
    children: ReactNode;
}
export const BasicLayout: FC<Props> = memo((props) => {
    const { children } = props;

    return (
        <>
            <MenuHeader>
                <Box py={5}>
                    <BasicContainer>
                        { children }
                    </BasicContainer>
                </Box>
                <Footer />
            </MenuHeader>
        </>
    );
});