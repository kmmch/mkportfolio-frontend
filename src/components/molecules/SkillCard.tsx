import { Box, Card, CardBody, Text, Image, Heading, HStack } from "@chakra-ui/react";
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
            <Card my="5">
                <CardBody>
                    <HStack>
                        <Image
                            src={img}
                            alt={title}
                            h="50px"
                            w="50px"
                        />
                        <Box ml="3">
                            <Heading as="h3" fontSize="2xl">{title}</Heading>
                            <Level level={level}/>
                            {tags.map((tag) => {
                                return(<Tag label={tag} />);
                            })}
                        </Box>
                    </HStack>
                </CardBody>
            </Card>
        </>
    );
});