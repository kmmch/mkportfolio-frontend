import { Box, Flex, TabPanel } from "@chakra-ui/react";
import { FC, memo } from "react";

import { SkillCard } from "./SkillCard";

type Props = {
    skills: Array<{ 
        title: string; 
        img: string; 
        level: number; 
        tags: string[]; 
    }>;
}

export const SkillCardList:FC<Props> = memo((props) => {
    const { skills } = props;

    return (
        <>
            <TabPanel 
                w={{
                    base: "100%"
                }}
            >
                <Flex
                    flexWrap="wrap"
                    justifyContent={{
                        base: "center",
                        lg: "space-between"
                    }}
                    _after={{
                        lg: {
                        content: `""`,
                        display: 'block',
                        width: '30%'}
                    }}
                >
                    {skills.map((skill, index) => {
                        return(
                            <Box key={index}>
                                <SkillCard
                                    img={skill.img}
                                    title={skill.title}
                                    level={skill.level}
                                    tags={skill.tags}
                                />
                            </Box>
                        );
                    })}
                </Flex>
            </TabPanel>
        </>
    );
});