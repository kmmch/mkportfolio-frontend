import { FC, memo } from "react";

import { 
    Button,
    Center,
    Heading,
    Image,
    Link,
    Text,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Card,
    CardBody
} from "@chakra-ui/react";
import { work } from "../types/CustomType";


type Props = {
    work: work;
};

export const WorkCard: FC<Props> = memo((props) => {
    const { work } = props;

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Center my={3}>
                <Link onClick={onOpen}>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                                src={work.thumbnail}
                                alt={work.title}
                                borderRadius='lg'
                                maxW='350px'
                            />
                            <Heading as='h3' fontSize='xl' textAlign='center' mt={3}>{work.title}</Heading>
                            <Text textAlign='center'>{work.description}</Text>
                        </CardBody>
                    </Card>
                </Link>
            </Center>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{work.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {work.body}
                    </ModalBody>
                     <ModalFooter>
                        <Button mr={3} onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    );
});