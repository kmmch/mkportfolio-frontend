import { FC, memo } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { WORK_DATA } from "../../data/work";
import { WorkCard } from "./WorkCard";

type Props = {};

export const WorkCardList:FC<Props> = memo((props) => {
    return (
        <>
            <Flex
                flexWrap="wrap"
                justifyContent={{
                    base: "center",
                    lg: "space-between"
                }}
                _after={{
                    md: {
                        content: `""`,
                        display: 'block',
                        width: '384px',
                    }
                }}
            >
            {WORK_DATA.map((work, index) => {
                return(
                    <Box key={index} mb="3">
                        <WorkCard   
                            title={work.title}
                            img={work.img}
                            url={work.url}
                            modal={work.modal}
                        />
                    </Box>
                );
            })}
            </Flex>
        </>
    );
});