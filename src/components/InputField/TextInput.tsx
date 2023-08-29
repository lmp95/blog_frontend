import { ComponentPropsWithoutRef, HTMLInputTypeAttribute, LegacyRef, forwardRef } from 'react';

function TextInput({ name, label, type = 'text', register, placeholder }: TextInputProps, ref: LegacyRef<HTMLInputElement>) {
    return (
        <>
            {label && <p className='text-sm pb-1'>{label}</p>}
            <input
                ref={ref}
                placeholder={placeholder}
                type={type}
                {...register?.(name)}
                className='p-2 text-sm w-full border-[0.5px] border-lightDark/70 rounded-md'
            />
        </>
    );
}

export default forwardRef(TextInput);

interface TextInputProps extends ComponentPropsWithoutRef<'input'> {
    name: string;
    label?: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    register?: any;
}
