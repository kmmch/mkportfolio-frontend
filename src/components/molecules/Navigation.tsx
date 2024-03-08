import { FC, memo } from "react";
import { Link, LinkProps, Stack } from "@chakra-ui/react";

const HoverLink = (props: LinkProps) => <Link rounded="base" _hover={{bg:"gray.200"}} p={2} {...props } />

export const Navigation: FC = memo(() => {
    return (
        <>
            <Stack as="nav">
                <HoverLink href="/#work">WORK</HoverLink>
                <HoverLink href="/#skill">SKILL</HoverLink>
                <HoverLink href="/#contact">CONTACT</HoverLink>
            </Stack>
        </>
    );
});