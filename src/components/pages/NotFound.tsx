import { Box, Center, Heading, Link, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { StyledBr } from "../styled/StyledBr";

export const NotFound: FC = memo(() => {
    return (
        <>
            <Box pb={10}>
                <Text>ホーム / お探しのページは見つかりません</Text>
            </Box>

            <Box>
                <Center pb={5}>
                    <Heading as='h1' fontSize='xl'>お探しのページは見つかりません</Heading>
                </Center>

                <Center pb={5}>
                    <Text>お探しのページは削除されたか、<StyledBr />URLが変更された可能性があります。</Text>
                </Center>

                <Center>
                    <Link href='/'>トップページへ戻る</Link>
                </Center>
            </Box>
        </>
    );
});