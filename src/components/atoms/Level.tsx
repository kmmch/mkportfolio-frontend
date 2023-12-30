import { FC, memo } from "react";
import { Text } from '@chakra-ui/react';

type Props = {
    level: number;
};
export const Level:FC<Props> = memo((props) => {
    const { level } = props;

    const bg = `teal.${100*(level+3)}`;

    return (
        <>
            <Text 
                display="inline-block" 
                color="white"
                bg={bg} 
                py="" 
                px="3" 
                mr="2"
                borderRadius={10} 
                fontWeight="bold"
                fontSize="sm"
            >Lv.{ level }</Text>
        </>
    );
    
});