import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { FieldInterface } from '~/interfaces/field';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextInputField } from '../InputField';
import { FilledButton } from '../Button';

function Form({
    initialValues,
    fields,
    schema,
    formSubmitHandler,
    formBtnLabel = 'Confirm',
    children,
}: {
    initialValues?: any;
    fields: FieldInterface[];
    schema: any;
    formSubmitHandler: Function;
    formBtnLabel?: string;
    children?: ReactNode;
}) {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        getValues,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), defaultValues: initialValues });

    const onSubmit = async (data: any) => {
        try {
            const result = await formSubmitHandler(data);
            result && reset();
        } catch (error) {}
    };
    const navigate = useNavigate();

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {children}
                {fields.map(({ name, label, type, placeholder, options }) => (
                    <div key={name} className='mb-3'>
                        <FieldType
                            value={getValues(name)}
                            setValue={setValue}
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
                <FilledButton label={formBtnLabel} isFullWidth />
            </form>
        </>
    );
}

export default Form;

function FieldType({
    name,
    label,
    placeholder,
    type,
    register,
}: {
    name: string;
    label: string;
    placeholder?: string;
    options?: any[];
    type: 'text' | 'password' | 'number';
    register: any;
    value: any;
    setValue: any;
}) {
    return <TextInputField name={name} register={register} label={label} type={type} placeholder={placeholder} />;
}
