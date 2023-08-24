import { Dispatch, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilledButton } from '~/components/Button';
import { TextInputField } from '~/components/InputField';

function Login() {
    const [isRegister, setIsRegister] = useState<boolean>(false);
    const navigate = useNavigate();

    if (isRegister) return <SignUp setIsRegister={setIsRegister} />;

    return (
        <div className='grid grid-cols-2 place-items-center w-screen h-screen '>
            <div className='bg-primary w-full h-full'></div>
            <div className='px-16 grid items-center justify-start border-[1px] border-lightDark/10 w-full h-full'>
                <div className='flex flex-col gap-3 w-[500px]'>
                    <h1 className='text-h3 mb-3 font-semibold text-matteBlack'>Log In</h1>
                    <TextInputField label='Email' type='email' />
                    <TextInputField label='Password' type='password' />
                    <FilledButton label='Login' isFullWidth onClick={() => navigate('/')} />
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

    return (
        <div className='grid grid-cols-2 place-items-center w-screen h-screen '>
            <div className='bg-primary w-full h-full'></div>
            <div className='px-16 grid items-center justify-start border-[1px] border-lightDark/10 w-full h-full'>
                <div className='flex flex-col gap-3 w-[500px]'>
                    <h1 className='text-h3 mb-3 font-semibold text-matteBlack'>Sign Up</h1>
                    <TextInputField label='Username' />
                    <TextInputField label='Email' type='email' />
                    <TextInputField label='Password' type='password' />
                    <TextInputField label='Confirm Password' type='password' />
                    <FilledButton label='Create an account' isFullWidth onClick={() => null} />
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
