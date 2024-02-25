import { FC, memo } from "react";


import { WORK } from "../../data/works";
import { WorkCard } from "./WorkCard";


// type Props = {};

export const WorkCardList: FC = memo(() => {

    return (
        <>
            {WORK.map((work, key) => {
                    return (
                        <WorkCard key={key} work={work} />
                    );
                })}

        </>
    );
});