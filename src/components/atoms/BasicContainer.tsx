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
                p={{
                    base: 0
                }}
                maxW={{
                    base: "",
                    lg: "1100px"
                }}

                backgroundColor={bColor}
            >
                { children }
            </Container>
        </>
    );
});