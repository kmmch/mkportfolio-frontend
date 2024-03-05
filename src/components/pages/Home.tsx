import { FC, memo } from "react";
import { 
    Box,
    Flex,
    Tab,
    TabList,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";

import { Section } from "../organisms/Section";
import { WorkCardList } from "../molecules/WorkCardList";
import { SkillCardList } from "../molecules/SkillCardList";
import { Level } from "../atoms/Level";
import { TopProfile } from "../molecules/TopProfile";
import { ContactForm } from "../molecules/ContactForm";
// import { motion, useScroll } from "framer-motion";

export const Home: FC = memo(() => {

    // const { scrollYProgress } = useScroll();

    return (
        <>
            {/* <motion.div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9,
                    height: "20px",
                    transformOrigin: "0%",
                    backgroundColor: "#319795",
                    scaleX: scrollYProgress
                }}
            /> */}
            <Section>
                <TopProfile />
            </Section>

            <Section 
                title='WORK'
                description='実績'
            >
                <WorkCardList />
            </Section>

            <Section 
                title='SKILL'
                description='スキルセット'
            >
                <Flex justifyContent="center" mb="20px">
                    <Box>
                        <Box mb="2"><Level level={1} /><Text display="inline-block">興味がある</Text></Box>
                        <Box mb="2"><Level level={2} /><Text display="inline-block">学んだことがある</Text></Box>
                        <Box mb="2"><Level level={3} /><Text display="inline-block">実務で使ったことがある</Text></Box>
                        <Box mb="2"><Level level={4} /><Text display="inline-block">実務での使用、指導ができる</Text></Box>
                    </Box>
                </Flex>
                <Tabs isFitted variant='enclosed'
                    px="3"
                >
                    <TabList mb='1em'>
                        <Tab>Front-End</Tab>
                        <Tab>Back-End</Tab>
                        <Tab>Other</Tab>
                    </TabList>
                    <TabPanels>
                        <SkillCardList skill_type="front"/>
                        <SkillCardList skill_type="back"/>
                        <SkillCardList skill_type="other"/>
                    </TabPanels>
                </Tabs>
            </Section>

            <Section 
                title='CONTACT'
                description='お問い合わせ'
            >
                <Box my={5}>
                    <Text textAlign='center'>ここまでご覧いただきありがとうございます。</Text>
                    <Text textAlign='center'>もし私でお力添えできることがございましたら、<br />まずはお気軽にご連絡ください。</Text>
                    <Text fontSize={'sm'} textAlign='center'>※原則2営業日以内に回答いたします。</Text>
                </Box>
                <ContactForm />
            </Section>
        </>
    );
});