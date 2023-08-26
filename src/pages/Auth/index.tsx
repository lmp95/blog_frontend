import { useNavigate } from 'react-router-dom';
import Form from '~/components/Form';
import { LoginFormFields, loginSchema } from '~/forms/loginFields';
import { RegisterFields, registerSchema } from '~/forms/registerFields';
import { LoginInterface, RegisterUserInterface } from '~/interfaces';
import { useLoginMutation, useSignUpMutation } from '~/redux/api/auth';

function Auth({ isRegister }: { isRegister: boolean }) {
    let Form = <Login />;
    if (isRegister) Form = <SignUp />;

    return (
        <div className='grid grid-rows-1 md:grid-cols-2 place-items-center w-screen h-screen '>
            <div className='hidden md:block bg-primary w-full h-full'></div>
            <div className='px-0 md:px-16 flex justify-center md:grid items-center md:justify-start border-0  md:border-[1px] border-lightDark/10 w-full h-full'>
                <div className='flex flex-col gap-3 flex-1 px-8 md:px-0 w-auto md:w-[400px]'>{Form}</div>
            </div>
        </div>
    );
}

export default Auth;

export function Login() {
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();

    const loginHandler = ({ email, password }: LoginInterface) => {
        login({ email, password })
            .unwrap()
            .then(() => navigate('/'))
            .catch((error) => console.log(error));
    };

    return (
        <>
            <h1 className='text-h3 mb-3 font-semibold text-matteBlack'>Log In</h1>
            <Form isLoading={isLoading} fields={LoginFormFields} formBtnLabel='Login' schema={loginSchema} formSubmitHandler={loginHandler} />
            <p className='text-sm'>
                Don't have an account?{' '}
                <span onClick={() => navigate('/register')} className='text-primary cursor-pointer'>
                    Sign Up
                </span>
            </p>
        </>
    );
}

export function SignUp() {
    const navigate = useNavigate();
    const [register, { isLoading }] = useSignUpMutation();

    const signUpHandler = ({ username, email, password }: RegisterUserInterface) => {
        register({ username, email, password, status: true, role: 'Author' })
            .unwrap()
            .then(() => navigate('/'))
            .catch((error) => console.log(error));
    };

    return (
        <>
            <h1 className='text-h3 mb-3 font-semibold text-matteBlack'>Sign Up</h1>
            <Form isLoading={isLoading} fields={RegisterFields} formBtnLabel='Create an account' schema={registerSchema} formSubmitHandler={signUpHandler} />
            <p className='text-sm'>
                Already have an account?{' '}
                <span onClick={() => navigate('/login')} className='text-primary cursor-pointer'>
                    Login
                </span>
            </p>
        </>
    );
}
