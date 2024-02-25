import { Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    label: string
};

export const Tag:FC<Props> = memo((props) => {
    const { label } = props;
    return (
        <>
            <Text 
                display="inline-block"
                color="teal.900"
                bg="teal.100" 
                py="" 
                px="3"
                mr="2"
                borderRadius={10} 
                fontWeight="bold"
                fontSize="sm"
            >{ label }</Text>
        </>
    );
});