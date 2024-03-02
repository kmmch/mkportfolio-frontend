import { Box, Card, CardBody, Image, Heading, Flex } from "@chakra-ui/react";
import { FC, memo } from "react";
import { Level } from "../atoms/Level";
import { Tag } from "../atoms/Tag";

type Props = {
    img: string;
    title: string;
    level: number;
    tags: Array<string>;
};

export const SkillCard:FC<Props> = memo((props) => {
    const { img, title, level, tags } = props;

    return (
        <>
            <Card
                // w="331.11px"
                my="3"
            >
                <CardBody>
                    <Flex justifyContent="start" alignItems="center">
                        <Image
                            src={`https://api.mochiken.work${img}`}
                            alt={title}
                            h="50px"
                            w="50px"
                        />
                        <Box ml="2">
                            <Heading as="h3" fontSize="2xl" mb="1">{title}</Heading>
                            <Level level={level}/>
                            {tags.map((tag, index) => {
                                return (
                                    <Tag label={tag} key={index} />
                                );
                            })}
                        </Box>
                    </Flex>
                </CardBody>
            </Card>
        </>
    );
});