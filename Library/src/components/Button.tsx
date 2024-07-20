import React from "react";

interface IButtonProps {
    text: string;
    onClick: () => void;
}
const Button: React.FC<IButtonProps> = (props: IButtonProps): React.ReactElement => {
    const { onClick, text } = props;

    return (
        <button onClick={onClick} type="button">
            {text}
        </button>
    );
};
export default Button;
