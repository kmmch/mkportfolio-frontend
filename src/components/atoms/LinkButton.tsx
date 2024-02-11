import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    // isDisabled: boolean;
    isExternal?: boolean;
    href: string;
    children: string;
}

export const LinkButton: FC<Props> = memo((props) => {
    const { isExternal=false, href, children } = props;
    return (
        <>
            <Button
                as="a"
                rel="noopener noreferrer"
                href={ href ? href : undefined }
                target={ isExternal ? '_blank' : undefined}
            >{ children }</Button>
        </>
    );
});