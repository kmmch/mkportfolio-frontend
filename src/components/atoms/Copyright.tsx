import { FC, memo } from "react";

export const Copyright: FC = memo(() => {

    const now = new Date();
    const year = now.getFullYear();

    return (
        <>
            COPYRIGHT © {year} MASAYA KEMMOCHI. ALL RIGHTS RESERVED.
        </>
    );
});