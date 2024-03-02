import { Center, Spinner, TabPanel } from "@chakra-ui/react";
import { FC, Fragment, memo, useEffect } from "react";

import { SkillCard } from "./SkillCard";
import { useSkills } from "../../hooks/useSkills";

type Props = {
    skill_type: string;
}

export const SkillCardList:FC<Props> = memo((props) => {
    const { skill_type } = props;

    const { getSkills, loading, skills } = useSkills();

    useEffect(() => getSkills(skill_type), []);
    
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
                {loading ? (
                    <Center h="100vh">
                        <Spinner />
                    </Center>
                ) : 
                    skills && skills.map((skill, key) => {
                        const tags=skill.field_skill_field.split(",");
                        return (
                                <Fragment key={key}>
                                    <SkillCard
                                        img={skill.field_thumbnail}
                                        title={skill.name}
                                        level={Number(skill.field_level)}
                                        tags={tags}
                                    />
                                </Fragment>
                        );
                    })}
            </TabPanel>
        </>
    );
});