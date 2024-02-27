import { Box, Center, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { StyledBr } from "../styled/StyledBr";
import { LinkButton } from "../atoms/LinkButton";
import { BasicBreadCrumb } from "../molecules/BasicBreadcrumb";
import { Url } from "../../types/url";
import { Title } from "../atoms/Title";

export const NotFound: FC = memo(() => {
    const title = "お探しのページは見つかりません";
    const urls: Array<Url> = [
        {
            link: "/", 
            title: "ホーム"
        },
        { 
            link: "/asdfg",
            title: title
        }

    ];

    return (
        <>
            <Box pb={5}>
                <BasicBreadCrumb urls={ urls } />
            </Box>

            <Box>
                <Center pb={5}>
                    <Title>{ title }</Title>
                </Center>

                <Center pb={5}>
                    <Text>お探しのページは削除されたか、<StyledBr />URLが変更された可能性があります。</Text>
                </Center>

                <Center>
                    {/* <Link href='/'>トップページへ戻る</Link> */}
                    <LinkButton
                        href='/'
                    >トップページへ戻る</LinkButton>
                </Center>
            </Box>
        </>
    );
});