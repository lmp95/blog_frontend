import { ComponentPropsWithoutRef } from 'react';

function TextButton({ label, size = 'md', ...rest }: TextButtonProps) {
    let btnSize = 'text-md';

    switch (size) {
        case 'lg':
            btnSize = 'text-lg';
            break;
        case 'sm':
            btnSize = 'text-sm';
            break;
    }

    return (
        <button
            className={`${btnSize} px-4 py-2 hover:bg-lightDark/5 border-[1px] border-lightDark/0 hover:border-lightDark/5 transition-all rounded-md text-primary`}
            {...rest}
        >
            {label}
        </button>
    );
}

export default TextButton;

interface TextButtonProps extends ComponentPropsWithoutRef<'button'> {
    label: string;
    size?: 'sm' | 'md' | 'lg';
}
