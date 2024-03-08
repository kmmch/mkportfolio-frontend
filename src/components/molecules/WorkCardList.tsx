import { FC, memo, useEffect } from "react";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";

import { useWorks } from "../../hooks/useWorks";
import { WorkCard } from "./WorkCard";
import { BREAK_POINT } from "../../config/settings";


export const WorkCardList: FC = memo(() => {

    const { getWorks, loading, works } = useWorks();

    useEffect(() => getWorks(), []);

    return (
        <>
            <Wrap 
                justify={{
                    [BREAK_POINT]: 'space-between'
                }}
            >
                {
                    loading ? (
                        <Center h="100vh">
                            <Spinner />
                        </Center>
                    ) :  
                    works && works.map((work, key) => {
                        return (
                            <WrapItem key={key} 
                                maxW={{
                                    base: '100%',
                                    [BREAK_POINT]: '32.5%'
                                }}
                            >
                                <WorkCard work={work} />
                            </WrapItem>
                        );
                    })
                }
            </Wrap>
        </>
    );
});