import { 
    Box, 
    Container, 
    Text, 
    Image,
    VStack,
    Heading,
    Center,
} from '@chakra-ui/react';
import { WorkCard } from '../molecules/WorkCard';
import { Level } from '../atoms/Level';
import { SkillCard } from '../molecules/SkillCard';

export const Home = () => {
    
    return (
        <>
            <Box>
                <Container p="0">

                    {/* MainVisual */}
                    <Box h="100vh">
                        <Center h="100%">
                            <VStack>
                                <Heading as="h1">MochiLog</Heading>
                                <Text>Webエンジニア もちけんのポートフォリオサイトへようこそ！</Text>
                            </VStack>
                        </Center>
                    </Box>


                    {/* Profile */}
                    <Box h="100vh" bg="">
                        <Center h="100%">
                            <VStack>
                                <Heading>PROFILE</Heading>
                                <Image
                                    borderRadius='full'
                                    boxSize='30%' 
                                    src='/myicon.png'
                                    alt='Test'
                                />
                                <Heading as="h2" fontSize="2xl">もちけん / Masaya Kemmochi</Heading>
                                {/* <Heading as="h3" fontWeight="400" fontSize="lg">Webエンジニア</Heading> */}
                                <Text maxW="320px">
                                    埼玉県出身のWEBエンジニア。<br />
                                    学生時代に自然言語処理を学んだのち、SIerでWEBサイトの構築や運用に従事。<br />
                                    スキルアップのために個人でもWEBアプリ開発やIT教育の活動もおこなっている。
                                </Text>
                                {/* <LinkButton label="詳しいプロフィールはこちら" to="aaa" /> */}
                            </VStack>
                        </Center>
                    </Box>


                    {/* Works */}
                    <Center py="75px">
                        <VStack>
                            <Heading>WORKS</Heading>
                            <Text>これまでの実績</Text>
                            <Box>
                                <WorkCard 
                                    title="MochiLog"
                                    img="/works/mochiportfolio.png"
                                />
                                {/* <WorkCard
                                    title="実績のタイトル"
                                    img="https://source.unsplash.com/random"
                                /> */}
                                {/* <WorkCard   
                                    title="実績はこちら"
                                    img="https://source.unsplash.com/random"
                                /> */}
                                {/* <LinkButton label="他の実績はこちら" to="aaa" /> */}
                            </Box>                        
                        </VStack>
                    </Center>
                        

                    {/* Skill */}
                    <Center py="75px">
                        <VStack>
                            <Heading>Skill</Heading>
                            <Text>使用可能な技術</Text>
                            <Box>
                                <Box>
                                    <Box mb="2"><Level level={1} /><Text display="inline-block">興味がある</Text></Box>
                                    <Box mb="2"><Level level={2} /><Text display="inline-block">学んだことがある</Text></Box>
                                    <Box mb="2"><Level level={3} /><Text display="inline-block">実務で使ったことがある</Text></Box>
                                    <Box mb="2"><Level level={4} /><Text display="inline-block">実務で使用しており、他人への指導もできる</Text></Box>
                                </Box>
                                <Box>
                                    <SkillCard
                                        img="/skills/HTML.svg"
                                        title="HTML"
                                        level={4}
                                        tags={["WEB", "front-end"]}
                                    />
                                    <SkillCard
                                        img="/skills/CSS.svg"
                                        title="CSS"
                                        level={4}
                                        tags={["WEB", "front-end"]}
                                    />
                                    <SkillCard
                                        img="/skills/Sass.svg"
                                        title="Sass"
                                        level={4}
                                        tags={["WEB", "front-end"]}
                                    />
                                    <SkillCard
                                        img="/skills/Javascript.svg"
                                        title="Javascript"
                                        level={4}
                                        tags={["WEB", "front-end"]}
                                    />
                                    <SkillCard
                                        img="/skills/TypeScript.svg"
                                        title="TypeScript"
                                        level={2}
                                        tags={["WEB", "front-end"]}
                                    />
                                    <SkillCard
                                        img="/skills/Python.svg"
                                        title="Python"
                                        level={2}
                                        tags={["back-end"]}
                                    />
                                </Box>
                            {/* <Heading>Language</Heading>
                            <Text>Javascript</Text>
                            <Text>TypeScript</Text>
                            <Text>PHP</Text>
                            <Text>Python</Text>
                            <Text>Java</Text>
                            <Heading>Framework</Heading>
                            <Text>React</Text>
                            <Text>Symfony</Text>
                            <Heading>CMS</Heading>
                            <Text>Wordpress</Text>
                            <Text>Drupal</Text>
                            <Heading>MiddleWare</Heading>
                            <Text>Apache</Text>
                            <Text>MySQL</Text>
                            <Heading>Infrastructure</Heading>
                            <Text>AWS</Text> */}
                            </Box>
                        </VStack>
                    </Center>

                </Container>
            </Box>
        </>
    );
}