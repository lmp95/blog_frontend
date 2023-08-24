import { useNavigate } from 'react-router-dom';
import { FilledButton } from '~/components/Button';
import { TextInputField } from '~/components/InputField';

function Login() {
    const navigate = useNavigate();

    return (
        <div className='grid grid-cols-2 place-items-center w-screen h-screen '>
            <div className='bg-primary w-full h-full'></div>
            <div className='px-16 grid items-center justify-start border-[1px] border-lightDark/10 w-full h-full'>
                <div className='flex flex-col gap-3 w-[500px]'>
                    <h1 className='text-h3 mb-3 font-semibold text-matteBlack'>Log In</h1>
                    <div>
                        <TextInputField label='Email' type='email' />
                    </div>
                    <div className='mb-2'>
                        <TextInputField label='Password' type='password' />
                    </div>
                    <FilledButton label='Login' isFullWidth onClick={() => navigate('/')} />
                    <p className='text-sm'>
                        Don't have an account?{' '}
                        <span onClick={() => navigate('/signUp')} className='text-primary cursor-pointer'>
                            Sign Up
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
