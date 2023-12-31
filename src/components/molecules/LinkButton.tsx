import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { Link } from "react-router-dom";

type Props = {
    label: string;
    to: string;
    target?: string;
};

export const LinkButton:FC<Props> = memo((props) => {
    const { label, to, target="" } = props;

    return (
        <>
            <PrimaryButton>
                <Link to={to} target={target}>{ label }</Link>
            </PrimaryButton>
        </>
    );
});