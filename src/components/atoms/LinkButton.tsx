import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    isDisabled: boolean;
    isExternal: boolean;
    href: string;
    children: string;
}

export const LinkButton: FC<Props> = memo((props) => {
    const { isDisabled, isExternal, href, children } = props;
    return (
        <>
            <Button
                as="a"
                rel="noopener noreferrer"
                href={ isDisabled ? undefined : href }
            >{ children }</Button>
        </>
    );
});