import { Button } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

type Props = {
    label?: string;
    children?: ReactNode;
};

export const PrimaryButton:FC<Props> = memo((props) => {
    const { label, children } = props;

    return (
        <>
            <Button bg="teal.400" color="white" fontSize="md">{ label || children }</Button>
        </>
    );
});