import { 
    Box, 
    Text, 
    Center,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    Flex,
} from '@chakra-ui/react';
import { Level } from '../atoms/Level';
import { LinkButton } from '../molecules/LinkButton';
import { MainVisual } from '../organisms/MainVisual';
import { Profile } from '../organisms/Profile';
import { TopSection } from '../organisms/TopSection';

import { 
    FRONT_SKILL_DATA,
    BACK_SKILL_DATA,
    OTHER_SKILL_DATA
} from '../../data/skill';
import { SkillCardList } from '../molecules/SkillCardList';
import { WorkCardList } from '../molecules/WorkCardList';

export const Home = () => {
    
    return (
        <>
            {/* MainVisual */}
            <MainVisual />


            {/* Profile */}
            <Box h="100vh" bg="">
                <Center h="100%">
                    <Profile />
                </Center>
            </Box>


            {/* WORKS */}
            <TopSection
                title="WORKS"
                description="これまでの実績"
            >
                <WorkCardList />
                {/* <LinkButton label="他の実績はこちら" to="aaa" /> */}
            </TopSection>
                

            {/* SKILL */}
            <TopSection
                title="SKILL"
                description="使用可能な技術"
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
                        <SkillCardList skills={FRONT_SKILL_DATA}/>
                        <SkillCardList skills={BACK_SKILL_DATA}/>
                        <SkillCardList skills={OTHER_SKILL_DATA}/>
                    </TabPanels>
                </Tabs>
            </TopSection>


                    {/* CONTACT */}
                    <TopSection
                        title="CONTACT"
                        description='お問い合わせ'
                    >
                    {/* <Text align="center">
                            サイトをご覧いただきありがとうございます。<br />
                            ご相談やご質問はこちらのフォームよりお問い合わせください。<br />
                            原則1〜2営業日以内にご返信いたします。<br />
                        </Text>
                        <Center>
                            <LinkButton to="/contact" label="お問い合わせはこちら" />
                        </Center> */}
                        <Text align="center">
                            サイトをご覧いただきありがとうございます。<br />
                            ご相談やご質問はXのDMよりお問い合わせください。<br />
                            原則1〜2営業日以内にご返信いたします。<br />
                        </Text>
                        <Center mt="2">
                            <LinkButton to="https://twitter.com/mochiken__code" label="お問い合わせはこちら" target="_blank" />
                        </Center>
                    </TopSection>
        </>
    );
}