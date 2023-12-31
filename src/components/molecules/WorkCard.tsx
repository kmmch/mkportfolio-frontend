import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
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
} from '@chakra-ui/react'
import { FC, memo } from "react";

type Props = {
    title: string;
    img: string;
};

export const WorkCard:FC<Props> = memo((props) => {
    const { title, img } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
        <>
            <Card 
                w='360px' 
                _hover={{opacity: "0.5", transition: "all 0.3s", cursor: "pointer"}}
                mx="3"
            >
                {/* onClick={onOpen}を削除した */}
                <CardBody>
                    <Image
                        src={img}
                        alt={title}
                        w="360px"
                        h="240px"
                    />
                    <Stack mt='3'>
                        <Center>
                            <Heading size='md'>{ title }</Heading>
                        </Center>
                    </Stack>
                </CardBody>
            </Card>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{ title }</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='gray' mr={3} onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
});