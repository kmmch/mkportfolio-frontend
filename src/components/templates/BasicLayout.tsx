import { FC, ReactNode, memo } from "react";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";

type Props = {
    children: ReactNode;
}
export const BasicLayout: FC<Props> = memo((props) => {
    const { children } = props;

    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    );
});