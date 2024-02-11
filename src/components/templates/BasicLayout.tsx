import { FC, ReactNode, memo } from "react";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { Box, Container } from "@chakra-ui/react";
import { BasicContainer } from "../atoms/BasicContainer";

type Props = {
    children: ReactNode;
}
export const BasicLayout: FC<Props> = memo((props) => {
    const { children } = props;

    return (
        <>
            <Header />

            <Box py={5}>
                <BasicContainer>
                    { children }
                </BasicContainer>
            </Box>

            <Footer />
        </>
    );
});