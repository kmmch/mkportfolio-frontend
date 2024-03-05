import { FC, ReactNode, memo } from "react";
import { Container } from '@chakra-ui/react'

type Props = {
    children: ReactNode;
    bColor?: string;
}
export const BasicContainer: FC<Props> = memo((props) => {
    const { children, bColor } = props;

    return (
        <>
            <Container
                w={{
                    base: "90%",
                    lg: "900px"
                }}
                backgroundColor={bColor}
            >
                { children }
            </Container>
        </>
    );
});