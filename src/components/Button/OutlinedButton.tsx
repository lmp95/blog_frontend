import { ComponentPropsWithoutRef } from 'react';

function OutlinedButton({ label, ...rest }: OutlinedButtonProps) {
    return (
        <button className='hover:shadow-outlineBtn transition-all rounded-md text-primary text-sm border-[1px] border-primary/50 px-4 py-2' {...rest}>
            {label}
        </button>
    );
}

export default OutlinedButton;

interface OutlinedButtonProps extends ComponentPropsWithoutRef<'button'> {
    label: string;
}
