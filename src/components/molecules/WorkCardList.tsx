import { FC, memo, useEffect } from "react";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";

import { useWorks } from "../../hooks/useWorks";
import { WorkCard } from "./WorkCard";


export const WorkCardList: FC = memo(() => {

    const { getWorks, loading, works } = useWorks();

    useEffect(() => getWorks(), []);

    return (
        <>
            <Wrap 
                justify={{
                    md: 'space-between'
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
                                    md: '32.5%'
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