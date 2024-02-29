import { FC, memo, useEffect } from "react";


// import { WORK } from "../../data/works";
import { useWorks } from "../../hooks/useWorks";
import { WorkCard } from "./WorkCard";
import { Center, Spinner } from "@chakra-ui/react";


// type Props = {};

export const WorkCardList: FC = memo(() => {

    const { getWorks, loading, works } = useWorks();

    useEffect(() => getWorks(), []);

    return (
        <>
            {loading ? (
                <Center h="100vh">
                    <Spinner />
                </Center>
            ) :  
                works && works.map((work, key) => {
                    return (
                        <WorkCard key={key} work={work} />
                    );
                })}
        </>
    );
});