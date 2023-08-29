import { ComponentPropsWithoutRef, HTMLInputTypeAttribute, LegacyRef, forwardRef } from 'react';

function Checkbox({ name, checkboxValue, label, type = 'text', register }: CheckboxProps) {
    return (
        <>
            <input id={name} type={type} {...register?.(name)} value={checkboxValue} className='p-2 text-sm border-[0.5px] border-lightDark/70 rounded-md' />
            {label && (
                <label htmlFor={name} className='text-sm pb-1 pl-1'>
                    {label}
                </label>
            )}
        </>
    );
}

export default Checkbox;

interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
    name: string;
    label?: string;
    checkboxValue?: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    register?: any;
}
