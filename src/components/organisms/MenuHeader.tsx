import { FC, ReactNode, memo } from "react";
import { Box, Container, HStack, Heading, Link, Stack } from "@chakra-ui/react";

import { DrawerMenu } from "../molecules/DrawerMenu";
import { Navigation } from "../molecules/Navigation";
import { BREAK_POINT } from "../../config/settings";

type Props = {
    children?: ReactNode;
}

const containerMaxWidth:string = '1440px';
const fixedHeaderHeight:number = 100;
const fixedNavigationWidthPc:string = '17%';
const fixedNavigationMaxWidth:string = '280px';
const fixedNavigationHeight:string = '100vh';
const contentAreaWidth:string = '82%';
const contentAreaMaxWidth:string = '1120px';
const contentAreaMarginLeft:string = '18%';

export const MenuHeader: FC<Props> = memo((props) => {

    const fixedHeaderCustomStyle = {
        boxShadow: "0px 12px 6px -13px #777777"
    };

    const { children } = props;
    
    return (
        <>
            <Stack>
                <HStack 
                    p={5} 
                    position={'fixed'} 
                    zIndex={9}
                    backgroundColor={'white'}
                    w={'100%'} 
                    h={fixedHeaderHeight}
                    alignItems={'center'}
                >
                    <Container maxW={{[BREAK_POINT]: containerMaxWidth}}>
                        <HStack justifyContent={'space-between'}>
                            <Link href='/' _hover={{opacity:'0.5'}}>
                                <Heading as='h1'>Mochiken's Portfolio</Heading>
                            </Link>
                            <Box 
                                display={{ 
                                    base: "block", 
                                    [BREAK_POINT]: "none" 
                                }}
                            >
                                <DrawerMenu />
                            </Box>
                        </HStack>
                    </Container>
                </HStack>
                {/* 横幅768px以上 */}
                <Container mt={fixedHeaderHeight*1.35} maxW={{[BREAK_POINT]: containerMaxWidth}}>
                    <HStack alignItems="start" gap={0}>
                        <Box 
                            display={{ 
                                base: "none", 
                                [BREAK_POINT]: "block"
                            }}
                            w={{[BREAK_POINT]: fixedNavigationWidthPc}}
                            maxW={{[BREAK_POINT]: fixedNavigationMaxWidth}}
                            px={6}
                            position={'fixed'}
                            zIndex={9}
                            backgroundColor={'white'}
                            h={fixedNavigationHeight}
                        >
                            <Navigation />
                        </Box>
                        <Box 
                            ml={{[BREAK_POINT]: contentAreaMarginLeft}} 
                            w={{[BREAK_POINT]: contentAreaWidth}}
                            maxW={{[BREAK_POINT]: contentAreaMaxWidth}}
                        >
                            {children}
                        </Box>
                    </HStack>
                </Container>
            </Stack>
        </>
    );
});