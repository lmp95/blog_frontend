import { ComponentPropsWithoutRef, HTMLInputTypeAttribute } from 'react';

function Textarea({ name, label, type = 'text', register, placeholder }: TextareaProps) {
    return (
        <>
            <p className='text-sm pb-1'>{label}</p>
            <textarea
                placeholder={placeholder}
                type={type}
                {...register?.(name)}
                rows={10}
                className='p-2 resize-y text-sm w-full border-[0.5px] border-lightDark/70 rounded-md'
            />
        </>
    );
}

export default Textarea;

interface TextareaProps extends ComponentPropsWithoutRef<'input'> {
    name: string;
    label: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    register?: any;
}
