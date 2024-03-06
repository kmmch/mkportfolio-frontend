import { FC, memo } from "react";

import { 
    Button,
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
    CardBody,
    VStack
} from "@chakra-ui/react";
import { Work } from "../../types/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BACKEND_ORIGIN } from "../../config/settings";


type Props = {
    work: Work;
};

export const WorkCard: FC<Props> = memo((props) => {
    const { work } = props;

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Link 
                onClick={onOpen}
                // h={'300px'}
            >
                <Card 
                    // h={'100%'}
                >
                    <CardBody>
                        <VStack
                            align={'stretch'}
                            justifyContent={'space-around'}
                            // h={'100%'}
                        >
                            <Image
                                src={`${ BACKEND_ORIGIN }${work.field_img}`}
                                alt={work.title}
                                borderRadius='lg'
                            />
                            <Heading as='h3' fontSize='xl' textAlign='center'>{work.title}</Heading>
                            <Text textAlign='center'>{work.field_description}</Text>
                        </VStack>
                    </CardBody>
                </Card>
            </Link>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{work.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>実際の作品は<Link href={work.field_url} isExternal textDecoration='underline'>こちらから<ExternalLinkIcon mx='2px' /></Link>ご確認ください。</Text>
                    </ModalBody>
                     <ModalFooter>
                        <Button mr={3} onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    );
});