import { FC, memo } from "react";
import { 
    Box,
    Center,
    Heading,
    Image,
    Link,
    Text,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export const TopProfile: FC = memo(() => {
    return (
        <>
            <Image
                src='./myicon.png'
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
                <Heading as='h2' textAlign='center'>Mochiken</Heading>
                <Text textAlign='center'>WEBエンジニア</Text>
            </Box>


            <Box my='5'>
                <Text mb='7.5px'>学生時代は自然言語処理を専攻。</Text>
                <Text mb='7.5px'>大学卒業後にIT企業へ入社し、主にCMSを使ったWEBサイト構築に従事。<br />要件定義から運用保守まで幅広い経験を持つ。</Text>
                <Text mb='7.5px'>DrupalなどCMSを使ったWEBサイト構築が得意。</Text>
                <Text mb='7.5px'>現在はモダンフレームワークを使ったWEBアプリ開発を勉強中。</Text>
            </Box>
        </>
    );
});