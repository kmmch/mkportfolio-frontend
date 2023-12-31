import { Heading, VStack, Text, Image } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {};

export const Profile:FC<Props> = memo((props) => {
    return (
        <>
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
        </>
    );
});