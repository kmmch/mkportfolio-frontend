import { Box, Text } from "@chakra-ui/react";
import { FC, memo } from "react";


export const ThanksMessage: FC = memo(() => {
    return (
        <>
            <Box textAlign={'center'}>
                <Text>お問い合わせありがとうございます。</Text>
                <Text>入力したメールアドレスへご連絡いたします。</Text>
            </Box>
        </>
    );
});