import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

import { url } from "../types/CustomType";
import { ChevronRightIcon } from "@chakra-ui/icons";

type Props = {
    urls: Array<url>;
};

export const BasicBreadCrumb: FC<Props> = memo((props) => {
    const { urls } = props;

    return (
        <>
            { console.log(urls) }
            <Breadcrumb 
                spacing='8px'
                separator={<ChevronRightIcon color='gray.500' />}
            >
                <BreadcrumbItem>
                    <BreadcrumbLink href={ urls[0].link }>{ urls[0].title }</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href={ urls[1].link }>{ urls[1].title }</BreadcrumbLink>
                </BreadcrumbItem>
                {/* { urls.map((item, key) => {
                    return (
                        <>
                            <BreadcrumbItem key={ key }>
                                <BreadcrumbLink href={ item.link }>{ item.title }</BreadcrumbLink>
                            </BreadcrumbItem>
                        </>
                    );
                }) } */}
            </Breadcrumb>
        </>
    );
});