import { useForm } from 'react-hook-form';
import { ReactNode } from 'react';
import { FieldInterface } from '~/interfaces/field';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextInputField, TextareaField } from '../InputField';
import { FilledButton } from '../Button';
import Dropdown, { DropdownOption } from '../Dropdown';
import Checkbox from '../InputField/Checkbox';

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
                            checkboxValue={value}
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

function FieldType({ name, label, placeholder, options, type, checkboxValue, register, setValue, value }: FieldTypeProps) {
    if (type === 'dropdown') {
        return (
            <Dropdown register={register} value={value} setValue={setValue} label={label} name={name} options={options || []} placeholder={placeholder || ''} />
        );
    }
    if (type === 'number' || type === 'text' || type === 'password') {
        return <TextInputField name={name} register={register} label={label} type={type} placeholder={placeholder} />;
    }
    if (type === 'textarea') {
        return <TextareaField name={name} register={register} label={label} type={type} placeholder={placeholder} />;
    }
    if (type === 'checkbox') {
        return <Checkbox name={name} register={register} label={label} type={type} checkboxValue={checkboxValue} />;
    }
    return null;
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
    type: 'text' | 'password' | 'number' | 'textarea' | 'dropdown' | 'checkbox';
    register: any;
    setValue: any;
    checkboxValue: string;
    value?: string;
}
