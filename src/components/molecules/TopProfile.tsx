import { FC, Fragment, memo, useEffect } from "react";
import { 
    Box,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useProfile } from "../../hooks/useProfile";
import { BACKEND_ORIGIN, GITHUB_LINK, X_LINK } from "../../config/settings";


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
                    <Flex
                        flexDirection={{
                            base: 'column',
                            sm: 'row'
                        }}
                    >
                        <Box w={{
                                base: '100%',
                                lg: '50%'
                            }}
                        >
                            <Box w='100%'>
                                <Image
                                    src={ profile && `${ BACKEND_ORIGIN }${profile.field_img}` }
                                    alt={'Mochiken'}
                                    borderRadius={'full'}
                                    m={'auto'}
                                    w={'75%'}
                                    maxW={'300px'}
                                />
                            </Box>
                        </Box>
                        <Box w={{
                                base: '100%',
                                lg: '50%'
                            }}
                        >
                            <Heading as='h2'>
                                { profile && profile.title}
                            </Heading>
                            <Text>WEBエンジニア</Text>
                            <Flex>
                                <Link href={ GITHUB_LINK } target={'_blank'} textAlign={'center'}>
                                    <FaGithub size="2rem" />
                                </Link>
                                <Link href={ X_LINK } target={'_blank'} textAlign={'center'}>
                                    <FaXTwitter size="2rem" />
                                </Link>
                            </Flex>
                            { profile && profile.field_body.map((body) => (
                                <Fragment key={body}>
                                    <Text>{ body }</Text>
                                </Fragment>
                            ))}
                        </Box>
                    </Flex>
                </>
            )}
        </>
    );
});