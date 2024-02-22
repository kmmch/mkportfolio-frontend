import { FC, ReactNode, memo } from "react";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { Box } from "@chakra-ui/react";
import { BasicContainer } from "../atoms/BasicContainer";

type Props = {
    children: ReactNode;
}
export const BasicLayout: FC<Props> = memo((props) => {
    const { children } = props;

    return (
        <>
            <Box backgroundColor='gray.700' py={5} px={3}>
                <Box backgroundColor='white' borderRadius={5}>
                    <Header />

                    <Box py={5}>
                        <BasicContainer>
                            { children }
                        </BasicContainer>
                    </Box>

                    <Footer />
                </Box>
            </Box>
        </>
    );
});