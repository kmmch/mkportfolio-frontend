import { FC, memo } from "react";
import { 
    Box,
    Center,
    Flex,
    Tab,
    TabList,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";

import { Section } from "../organisms/Section";
import { LinkButton } from "../atoms/LinkButton";
import { WorkCardList } from "../molecules/WorkCardList";
import { SkillCardList } from "../molecules/SkillCardList";
import { Level } from "../atoms/Level";
import { TopProfile } from "../molecules/TopProfile";
import { ContactForm } from "../molecules/ContactForm";

export const Home: FC = memo(() => {


    return (
        <>
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

            {/* <Section 
                title='HISTORY'
                description='経歴。'
            >
                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>2019.03 大学卒業</Heading>
                    <Text>自然言語処理を専攻。<br />卒業研究ではTwitter上の会話文を学習データとした言語生成モデルに関する研究をおこなう。</Text>
                </Box>

                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>2019.04 日系ITベンダー入社</Heading>
                    <Heading as='h3' fontSize='2xl'>2019.09 医療従事者向け会員サイト構築PJ</Heading>
                    <Text>メンバーとしてCMSを使ったサイト構築の案件に携わる。<br />
                    2年後のリリースまで参画。<br />
                    主にサイト全体の共通パーツやログイン機能、動画配信機能の設計・実装を担当した。</Text>
                </Box>

                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>2021.10 CMSバージョンアップPJ</Heading>
                    <Text>Drupal8からDrupal9へのバージョンアップを実施するPJに参画。<br />
                    事前調査や検証、手順の確立や組織の発信をおこなうことができた。<br />
                    わずか3ヶ月で10サイトで実行することができた。</Text>
                </Box>

                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>2022.01 コーポレートサイト運用PJ</Heading>
                    <Text>クライアントの運営するコーポレートサイト全10サイトの運用保守に参画。<br />
                    マーケティング系のツールを使ってアクセス解析やコンバージョンアップへの施策提案・実行を主に実施。<br />
                    サブPJとして実施した新規サイト構築ではコストやスケジュール、品質、タスクなどPJ全体のマネジメントもおこなった。</Text>
                </Box>

                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>2022.01 教育サービスTA</Heading>
                    <Text>教育サービスのTA（ティーチングアシスタント）業務を開始。<br />
                    内容はGitやAWSに関する講座のQA対応や補足資料作成。<br />
                    初めての方でもわかりやすい言葉や文章を使うことを心がけています。</Text>
                </Box>

                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>2023.04 MR向け製品情報サイト構築PJ</Heading>
                    <Text>製薬企業のMRが業務で使うサイトの構築に参画。<br />
                    主に設計や実装がメインだったが品質管理や課題管理、技術調査も実施。</Text>
                </Box>

                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>2023.12〜現在 データ分析ツール構築PJ</Heading>
                    <Text>製薬企業のMRが業務で使うツールの構築に参画。<br />
                    要件定義やメンバーの成果物レビュー、課題や品質管理など上流の業務がメイン</Text>
                </Box>            
            </Section> */}

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