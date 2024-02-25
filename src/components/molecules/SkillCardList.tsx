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
                w="100%"
            >
                {/* <Flex
                    flexWrap="wrap"
                    justifyContent={{
                        base: "center",
                        // lg: "space-between"
                        // base: "space-between"
                    }}
                    _after={{
                        lg: {
                        content: `""`,
                        display: 'block',
                        width: '30%',
                        height: '120px'}
                    }}
                > */}
                <Box
                    
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
                </Box>
            </TabPanel>
        </>
    );
});