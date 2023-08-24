import { ComponentPropsWithoutRef } from 'react';

function FilledButton({ label, ...rest }: FilledButtonProps) {
    return (
        <button
            className='hover:bg-primary/90 hover:border-primary/50 transition-all rounded-md bg-primary text-white text-sm border-[1px] border-primary px-4 py-2'
            {...rest}
        >
            {label}
        </button>
    );
}

export default FilledButton;

interface FilledButtonProps extends ComponentPropsWithoutRef<'button'> {
    label: string;
}
