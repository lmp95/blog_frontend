import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { FieldInterface } from '~/interfaces/field';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextInputField, TextareaField } from '../InputField';
import { FilledButton } from '../Button';
import Dropdown, { DropdownOption } from '../Dropdown';

function Form({ initialValues, isLoading = false, fields, schema, formSubmitHandler, formBtnLabel = 'Confirm', children }: FormProps) {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), defaultValues: initialValues });

    const onSubmit = async (data: any) => {
        try {
            const result = await formSubmitHandler(data);
            result && reset();
        } catch (error) {}
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map(({ name, label, type, placeholder, options, value }) => (
                    <div key={name} className='mb-3'>
                        <FieldType
                            setValue={setValue}
                            value={value}
                            register={register}
                            options={options}
                            placeholder={placeholder}
                            name={name}
                            label={label}
                            type={type}
                        />
                        {errors?.[name] && <p className='text-[10px] pt-[0.1rem] text-red p-0 m-0'>{errors[name]?.message?.toString()}</p>}
                    </div>
                ))}
                {children}
                <FilledButton disabled={isLoading} label={formBtnLabel} isFullWidth />
            </form>
        </>
    );
}

export default Form;

function FieldType({ name, label, placeholder, options, type, register, setValue, value }: FieldTypeProps) {
    switch (type) {
        case 'text':
        case 'number':
        case 'password':
            return <TextInputField name={name} register={register} label={label} type={type} placeholder={placeholder} />;
        case 'textarea':
            return <TextareaField name={name} register={register} label={label} type={type} placeholder={placeholder} />;
        case 'dropdown':
            return (
                <Dropdown
                    register={register}
                    value={value}
                    setValue={setValue}
                    label={label}
                    name={name}
                    options={options || []}
                    placeholder={placeholder || ''}
                />
            );
    }
}

interface FormProps {
    initialValues?: any;
    isLoading?: boolean;
    fields: FieldInterface[];
    schema: any;
    formSubmitHandler: Function;
    formBtnLabel?: string;
    children?: ReactNode;
}
interface FieldTypeProps {
    name: string;
    label: string;
    placeholder?: string;
    options?: DropdownOption[];
    type: 'text' | 'password' | 'number' | 'textarea' | 'dropdown';
    register: any;
    setValue: any;
    value?: string;
}
