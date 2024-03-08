import { FC, memo } from "react";
import { Link, LinkProps, Stack } from "@chakra-ui/react";

const HoverLink = (props: LinkProps) => <Link rounded="base" _hover={{bg:"gray.200"}} p={2} {...props } />

export const Navigation: FC = memo(() => {
    return (
        <>
            <Stack as="nav">
                <HoverLink href="/burger">Burger</HoverLink>
                <HoverLink href="/sidemenu">Sidemenu</HoverLink>
                <HoverLink href="/drink">Drink</HoverLink>
                <HoverLink href="/takeout">Takeout</HoverLink>          
            </Stack>
        </>
    );
});