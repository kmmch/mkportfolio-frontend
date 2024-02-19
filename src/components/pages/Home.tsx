import { FC, memo } from "react";
import { Box, Center, Heading, Image, Link, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Section } from "../organisms/Section";
import { LinkButton } from "../atoms/LinkButton";


export const Home: FC = memo(() => {
    return (
        <>
            <Section>
                <Image
                    src='src/assets/myicon.png'
                    alt='Mochiken'
                    borderRadius='full'
                    boxSize='50%'
                    m='auto'
                />


                <Center my='5'>
                    <Link href='https://github.com/kmmch' target='_blank'>
                        <FaGithub size="2rem" />
                    </Link>
                    <Link href='https://twitter.com/mochiken__code' target='_blank'>
                        <FaXTwitter size="2rem" />
                    </Link>
                </Center>
                

                <Box my='5'>
                    <Heading as='h2' textAlign='center'>Masaya Kemmochi</Heading>
                    <Text textAlign='center'>WEBエンジニア</Text>
                </Box>


                <Box my='5'>
                    <Text mb='7.5px'>学生時代は自然言語処理を専攻。</Text>
                    <Text mb='7.5px'>大学卒業後にIT企業へ入社し、主にCMSを使ったWEBサイト構築に従事。<br />要件定義から運用保守まで幅広い経験を持つ。</Text>
                    <Text mb='7.5px'>DrupalなどCMSを使ったWEBサイト構築が得意。</Text>
                    <Text mb='7.5px'>現在はモダンフレームワークを使ったWEBアプリ開発を勉強中。</Text>
                </Box>

            </Section>

            <Section 
                title='WORK'
                description='制作物'
            >
                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>Masaya Kemmochi Portfolio</Heading>
                    <Text>当サイトです。</Text>
                    <Text>バックエンドであるDrupalからAPIを介してReactで取得・描画をしております。</Text>
                    <Text>早期公開を目指したためまずは最低限のレイアウトで公開しております。（2024/2/12現在）</Text>
                    <Text>制作期間：7日</Text>
                    <Text>使用技術：React, Typescript, ChakraUI, Drupal, GoogleAnalytics</Text>
                </Box>
                
                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>Mochiken BLOG</Heading>
                    <Text>日々の業務や個人開発で得た知見をまとめているブログです。</Text>
                    <Text>スピーディな公開がしたかったためSWELLテーマを使用しております。</Text>
                    <Text>制作期間：1日</Text>
                    <Text>使用技術：HTML, CSS, Sass, Javascript, PHP, Wordpress, GitHub, GoogleAnalytics</Text>
                </Box>
                
                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>【架空案件】農園LP</Heading>
                    <Text>海や山、森に囲まれた緑豊かな大地で農園を営む会社さまをイメージしてランディングページを作成しました。</Text>
                    <Text>制作期間：3日</Text>
                    <Text>担当工程：デザイン、実装、テスト、リリース</Text>
                    <Text>使用技術：HTML, CSS, Sass, Javascript, jQuery, GitHub, Netlify, GoogleForm</Text>
                </Box>

                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>【架空案件】民泊紹介サービスLP</Heading>
                    <Text>世界各国の民泊を紹介するサービスのランディングページを作成しました。</Text>
                    <Text>制作期間：3日</Text>
                    <Text>担当工程：実装、テスト、リリース</Text>
                    <Text>使用技術：HTML, CSS, Sass, Javascript, GitHub, Netlify</Text>
                </Box>

            </Section>

            <Section 
                title='SKILL'
                description='スキルセット'
            >
                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>プログラミング言語 / フレームワーク</Heading>
                    <Heading as='h4' fontSize='xl'>フロントエンド</Heading>
                    <Text>HTML, CSS, Sass, Bootstrap, Javascript, jQuery React, ChakraUI, TypeScript</Text>
                    <Heading as='h4' fontSize='xl'>バックエンド</Heading>
                    <Text>PHP, Symfony, Python, Java</Text>
                </Box>

                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>CMS</Heading>
                    <Text>Drupal, Wordpress</Text>
                </Box>

                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>クラウド</Heading>
                    <Text>AWS（VPC, EC2, RDS, Route53, S3, Lightsail, Amplify）</Text>
                </Box>

                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>マーケティング</Heading>
                    <Text>GoogleAnalytics, GoogleSearchConsole, GoogleTagManager</Text>
                </Box>

                <Box my={5}>
                    <Heading as='h3' fontSize='2xl'>その他</Heading>
                    <Text>Figma, notion, Backlog</Text>
                </Box>
            </Section>

            <Section 
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
            </Section>

            <Section 
                title='CONTACT'
                description='お問い合わせ'
            >
                <Box my={5}>
                    <Text textAlign='center'>ここまでご覧いただきありがとうございます。</Text>
                    <Text textAlign='center'>もし私でお力添えできることがございましたら、まずはお気軽にご連絡ください。</Text>
                    <Text textAlign='center'>※現在はX（旧Twitter）のDMにて受け付けております。</Text>
                    <Text textAlign='center'>※原則2営業日以内に回答いたします。</Text>
                    <Center>
                        <LinkButton
                            isExternal={true}
                            href='https://twitter.com/mochiken__code'
                        >Xはこちらから</LinkButton>
                    </Center>
                </Box>
            </Section>
        </>
    );
});