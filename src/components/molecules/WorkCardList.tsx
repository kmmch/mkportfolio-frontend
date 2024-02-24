import { FC, memo } from "react";


import { WORK } from "../../data/work";
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