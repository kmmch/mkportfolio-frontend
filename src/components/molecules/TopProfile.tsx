import { FC, Fragment, memo, useEffect } from "react";
import { 
    Box,
    Center,
    Heading,
    Image,
    Link,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useProfile } from "../../hooks/useProfile";
import { BACKEND_ORIGIN } from "../../config/settings";


export const TopProfile: FC = memo(() => {

    const { getProfile, loading, profile } = useProfile();

    useEffect(() => getProfile(), []);

    return (
        <>
            {loading ? (
                <Center h="100vh">
                    <Spinner />
                </Center>
            ) : (
                <>
                    <Image
                        src={ profile && `${ BACKEND_ORIGIN }${profile.field_img}` }
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
                        <Heading as='h2' textAlign='center'>
                            { profile && profile.title}
                        </Heading>
                        <Text textAlign='center'>WEBエンジニア</Text>
                    </Box>
                    <Box my='5'>
                        { profile && profile.field_body.map((body) => (
                            <Fragment key={body}>
                                <Text>{ body }</Text>
                            </Fragment>
                        ))}
                    </Box>
                </>
            )}
        </>
    );
});