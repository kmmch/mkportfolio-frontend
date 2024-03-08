import { FC, ReactNode, memo } from "react";
import { Box, HStack, Heading, Link, Stack } from "@chakra-ui/react";

import { DrawerMenu } from "../molecules/DrawerMenu";
import { Navigation } from "../molecules/Navigation";

type Props = {
    children?: ReactNode;
}

const breakpoint:string = 'md';
const fixedHeaderHeight:number = 100;
const fixedNavigationWidthMd:string = '18%';
const contentAreaWidth:string = '80%'; // 100% - fixedNavigationWidthMd

export const MenuHeader: FC<Props> = memo((props) => {

    const fixedHeaderCustomStyle = {
        boxShadow: "0px 12px 6px -13px #777777"
    };

    const { children } = props;
    
    return (
        <>
            <Stack>
                {/* 横幅767px未満 */}
                <HStack 
                    p={5} 
                    position={'fixed'} 
                    zIndex={9}
                    backgroundColor={'white'}
                    w={'100%'} 
                    h={fixedHeaderHeight}
                    justifyContent={'space-between'}
                    style={fixedHeaderCustomStyle}
                >
                    <Link href='/' _hover={{opacity:'0.5'}}>
                        <Heading as='h1'>Mochiken's Portfolio</Heading>
                    </Link>
                    <Box 
                        display={{ 
                            base: "block", 
                            [breakpoint]: "none" 
                        }}
                    >
                        <DrawerMenu />
                    </Box>
                </HStack>
                {/* 横幅768px以上 */}
                <HStack alignItems="start" gap={0}>
                    <Box 
                        display={{ 
                            base: "none", 
                            [breakpoint]: "block"
                        }}
                        w={{[breakpoint]:fixedNavigationWidthMd}}
                        px={6}
                        position={'fixed'}
                        zIndex={9}
                        backgroundColor={'white'}
                        mt={fixedHeaderHeight*1.35}
                        h={'100vh'}
                    >
                        <Navigation />
                    </Box>
                    <Box 
                        mt={fixedHeaderHeight} 
                        ml={{[breakpoint]:fixedNavigationWidthMd}} 
                        w={{[breakpoint]:contentAreaWidth}}
                    >
                        {children}
                    </Box>
                </HStack>
            </Stack>
        </>
    );
});