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

            <Box backgroundColor='gray.300'>
                <BasicContainer bColor='gray.50'>
                    { children }
                </BasicContainer>
            </Box>

            <Footer />
        </>
    );
});