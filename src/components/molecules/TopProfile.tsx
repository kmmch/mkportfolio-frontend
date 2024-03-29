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
import { BACKEND_ORIGIN, BREAK_POINT, GITHUB_LINK, X_LINK } from "../../config/settings";


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
                            [BREAK_POINT]: 'row'
                        }}
                    >
                        <Box w={{
                                base: '100%',
                                [BREAK_POINT]: '50%'
                            }}
                            mb={{
                                base: 3,
                                [BREAK_POINT]: 0
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
                                [BREAK_POINT]: '50%'
                            }}
                        >
                            <Heading as='h2'
                                textAlign={{
                                    base: 'center',
                                    [BREAK_POINT]: 'start'
                                }}
                                mb={1}
                            >
                                { profile && profile.title}
                            </Heading>
                            <Text
                                textAlign={{
                                    base: 'center',
                                    [BREAK_POINT]: 'start'
                                }}
                                mb={3}
                            >WEBエンジニア</Text>
                            <Flex
                                justifyContent={{
                                    base: 'center',
                                    [BREAK_POINT]: 'start'
                                }}
                                mb={3}
                            >
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