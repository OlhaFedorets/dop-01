import React, {ButtonHTMLAttributes, useCallback} from 'react';

// type ButtonPropsType = {
//     title: string
//     onClick: () => void
// }

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({title, onClick}: Props) => {

    return (
            <button onClick={onClick}>{title}</button>
    );
};

