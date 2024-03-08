import { Box, Center, Spinner, TabPanel, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";

import { SkillCard } from "./SkillCard";
import { useSkills } from "../../hooks/useSkills";
import { useWindowSize } from "../../hooks/useWindowSize";

type Props = {
    skill_type: string;
}

export const SkillCardList:FC<Props> = memo((props) => {
    const { skill_type } = props;

    const { getSkills, loading, skills } = useSkills();

    const [width] = useWindowSize();

    useEffect(() => getSkills(skill_type), []);
    
    return (
        <>
            <TabPanel>
                <Wrap
                    justify={{
                        md: 'space-around'
                    }}
                >
                    {
                        loading ? (
                            <Center h="100vh">
                                <Spinner />
                            </Center>
                        ) : 
                        skills && skills.map((skill, key) => {
                            const tags = skill.field_skill_field.split(",");
                            return (
                                <WrapItem key={key}
                                    w={{
                                        base: '100%',
                                        md: '48%',
                                        lg: '32.5%'
                                    }}
                                >
                                    <SkillCard
                                        img={skill.field_thumbnail}
                                        title={skill.name}
                                        level={Number(skill.field_level)}
                                        tags={tags}
                                    />
                                </WrapItem>
                            );
                        })
                    }
                    { 
                        width > 991 && (skills && skills.length%3==2) ? (
                            <Box w={'32.5%'} h={'120.8px'}></Box>
                        ): null
                    }
                </Wrap>
            </TabPanel>
        </>
    );
});