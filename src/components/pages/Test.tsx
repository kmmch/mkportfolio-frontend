import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, memo } from "react";


// type Props = {};

export const Test: FC = memo(() => {
    return (
        <>
            <Text>motion</Text>
            <motion.div animate={{ x: 100 }} transition={{ type: 'spring', damping: 0 }} />
        </>
    );
});