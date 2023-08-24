import { ComponentPropsWithoutRef, HTMLInputTypeAttribute } from 'react';

function TextInput({ label, type = 'text' }: TextInputProps) {
    return (
        <div className='my-2'>
            <p className='text-sm pb-1'>{label}</p>
            <input type={type} className='p-2 text-sm w-full border-[0.5px] border-lightDark/70 rounded-md' />
        </div>
    );
}

export default TextInput;

interface TextInputProps extends ComponentPropsWithoutRef<'input'> {
    label: string;
    type?: HTMLInputTypeAttribute;
}
