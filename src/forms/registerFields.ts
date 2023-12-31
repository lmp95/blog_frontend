import { object, ref, string } from 'yup';
import { FieldInterface } from '~/interfaces/field';

export const RegisterFields: FieldInterface[] = [
    {
        name: 'username',
        label: 'Username',
        placeholder: 'Enter the username',
        value: '',
        type: 'text',
    },
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
    {
        name: 'confirmPassword',
        label: 'Confirm Password',
        placeholder: 'Enter the password again',
        value: '',
        type: 'password',
    },
];

export const registerSchema = object({
    username: string().required('Username is required'),
    email: string().required('Email is required'),
    password: string().required('Please enter your credentials'),
    confirmPassword: string().oneOf([ref('password')], 'Passwords must match'),
}).required();
