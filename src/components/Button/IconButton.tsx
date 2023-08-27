import { ComponentPropsWithoutRef } from 'react';

function IconButton({ icon, ...rest }: IconButtonProps) {
    return (
        <button {...rest} className='group-hover:bg-primary transition-all border-[0.5px] border-lightDark/50 px-2 py-2 rounded-md bg-lightDark/5'>
            {icon}
        </button>
    );
}

export default IconButton;

interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
    icon: JSX.Element;
}
