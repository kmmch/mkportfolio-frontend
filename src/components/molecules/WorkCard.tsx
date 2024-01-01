import { 
    Card, 
    CardBody, 
    Stack, 
    Center, 
    Heading, 
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Text,
    Link
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FC, memo } from "react";

type Props = {
    title: string;
    img: string;
    url?: string;
    modal?: boolean;
};

export const WorkCard:FC<Props> = memo((props) => {
    const { title, img, url = "", modal = false } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
        <>
            <Card 
                w='360px' 
                _hover={{opacity: "0.5", transition: "all 0.3s", cursor: "pointer"}}
                mx="3"
                onClick={onOpen}
            >
                {/* onClick={onOpen}を削除した */}
                <CardBody>
                    <Image
                        src={img}
                        alt={title}
                        w="360px"
                        h="200px"
                    />
                    <Stack mt='3'>
                        <Center>
                            <Heading size='md'>{ title }</Heading>
                        </Center>
                    </Stack>
                </CardBody>
            </Card>

            <Modal isOpen={modal && isOpen} onClose={onClose}  isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{ title }</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        { url && 
                            <Box>
                                <Link href={url} isExternal>
                                    こちらから確認できます。<ExternalLinkIcon mx='2px' />
                                </Link>
                            </Box>
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='gray' mr={3} onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
});