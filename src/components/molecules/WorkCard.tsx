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
import { Work } from "../../types/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";


type Props = {
    work: Work;
};

export const WorkCard: FC<Props> = memo((props) => {
    const { work } = props;

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Center mt={3} mb={5}>
                <Link onClick={onOpen}>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                                src={work.thumbnail}
                                alt={work.title}
                                borderRadius='lg'
                                // maxW='100%'
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
                        <Text>実際の作品は<Link href={work.url} isExternal textDecoration='underline'>こちらから<ExternalLinkIcon mx='2px' /></Link>ご確認ください。</Text>
                    </ModalBody>
                     <ModalFooter>
                        <Button mr={3} onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    );
});