import { Card, CardHeader, CardBody, CardFooter, Stack, Center, Heading, Image } from '@chakra-ui/react'
import { FC, memo } from "react";

type Props = {};

export const PrimaryCard:FC<Props> = memo((props) => {
    const {} = props;
    return (
        <Card maxW='md'>
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                />
                <Stack mt='3'>
                    <Center>
                        <Heading size='md'>Living room Sofa</Heading>
                    </Center>
                </Stack>
            </CardBody>
        </Card>
    );
});