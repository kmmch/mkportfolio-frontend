import { Heading } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    children: string;
};

export const Title: FC<Props> = memo((props) => {
    const { children } = props;

    return (
        <>
            <Heading as='h1' fontSize='xl'>{ children }</Heading>
        </>
    );
});