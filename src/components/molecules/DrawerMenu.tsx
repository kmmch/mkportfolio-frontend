import React from "react";
import { FC, memo } from "react";
import { 
    Button, 
    Drawer, 
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Navigation } from "./Navigation";


export const DrawerMenu: FC = memo(() => {

    // useDisclosureで閉じ・開きの管理
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)
    return (
        <>
            {/* ハンバーガーアイコン部分 */}
            <Button ref={btnRef} onClick={onOpen}>
                <HamburgerIcon />
            </Button>
            {/* Drawer部分 */}
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>
                        <DrawerBody>
                            <Navigation />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
});