import { object, string } from 'yup';
import { FieldInterface } from '~/interfaces/field';

export const LoginFormFields: FieldInterface[] = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter the email',
        value: '',
        type: 'text',
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter the password',
        value: '',
        type: 'password',
    },
];

export const loginSchema = object({
    email: string().required('Email is required'),
    password: string().required('Please enter your credentials'),
}).required();
