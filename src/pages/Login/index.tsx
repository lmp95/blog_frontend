import { Dispatch, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '~/components/Form';
import { LoginFormFields, loginSchema } from '~/forms/loginFields';
import { RegisterFields, registerSchema } from '~/forms/registerFields';
import { useLoginMutation, useSignUpMutation } from '~/redux/api/auth';

function Login() {
    const [isRegister, setIsRegister] = useState<boolean>(false);
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();

    const loginHandler = () => {
        login({ email: 'admin@mail.com', password: '123@abc' })
            .unwrap()
            .then((payload) => navigate('/'))
            .catch((error) => console.log('Error'));
    };

    if (isRegister) return <SignUp setIsRegister={setIsRegister} />;

    return (
        <div className='grid grid-cols-2 place-items-center w-screen h-screen '>
            <div className='bg-primary w-full h-full'></div>
            <div className='px-16 grid items-center justify-start border-[1px] border-lightDark/10 w-full h-full'>
                <div className='flex flex-col gap-3 w-[500px]'>
                    <h1 className='text-h3 mb-3 font-semibold text-matteBlack'>Log In</h1>
                    <Form fields={LoginFormFields} formBtnLabel='Login' schema={loginSchema} formSubmitHandler={loginHandler} />
                    <p className='text-sm'>
                        Don't have an account?{' '}
                        <span onClick={() => setIsRegister(true)} className='text-primary cursor-pointer'>
                            Sign Up
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;

export function SignUp({ setIsRegister }: SignUpProps) {
    const navigate = useNavigate();
    const [register, { isLoading }] = useSignUpMutation();

    const signUpHandler = () => {
        register({ username: 'lmp', email: 'lmp@mail.com', password: '123@abc', status: true, role: 'Author' })
            .unwrap()
            .then((payload) => navigate('/'))
            .catch((error) => console.log('Error'));
    };

    return (
        <div className='grid grid-cols-2 place-items-center w-screen h-screen '>
            <div className='bg-primary w-full h-full'></div>
            <div className='px-16 grid items-center justify-start border-[1px] border-lightDark/10 w-full h-full'>
                <div className='flex flex-col gap-3 w-[500px]'>
                    <h1 className='text-h3 mb-3 font-semibold text-matteBlack'>Sign Up</h1>
                    <Form fields={RegisterFields} formBtnLabel='Create an account' schema={registerSchema} formSubmitHandler={signUpHandler} />
                    <p className='text-sm'>
                        Already have an account?{' '}
                        <span onClick={() => setIsRegister(false)} className='text-primary cursor-pointer'>
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

interface SignUpProps {
    setIsRegister: Dispatch<React.SetStateAction<boolean>>;
}
