import { useNavigate } from 'react-router-dom';
import { FilledButton, OutlinedButton, TextButton } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, userSelector } from '~/redux/reducers/user.reducer';
import { IoMenuOutline, IoPersonCircleOutline } from 'react-icons/io5';
import { updateSidebar } from '~/redux/reducers/appState.reducer';
import { useState } from 'react';

function Header() {
    const { username, token } = useSelector(userSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const logoutHandler = () => {
        dispatch(clearUser());
        navigate('/');
    };

    const UserHeader = () => {
        if (username && token) {
            return (
                <div
                    role='button'
                    className={`w-[150px] relative hover:bg-lightDark/5 px-2 py-1 rounded-md ${
                        username && token ? 'cursor-pointer' : 'cursor-default'
                    } flex flex-row justify-center items-center gap-3`}
                    onClick={() => setShowOptions(!showOptions)}
                >
                    <IoPersonCircleOutline size={24} className='text-primary/80' />
                    <p className='text-sm text-primary'>{username}</p>
                    {showOptions && (
                        <div className='absolute rounded-md bg-white border-[0.5px] border-lightDark/50 w-full max-h-[200px] top-full mt-1 z-50'>
                            <TextButton isFullWidth size='sm' label='Sign Out' onClick={() => logoutHandler()} />
                        </div>
                    )}
                </div>
            );
        }
        return (
            <div className={'flex gap-2 items-center'}>
                <FilledButton label='Login' onClick={() => navigate('/login')} />
                <OutlinedButton label='Sign Up' onClick={() => navigate('/register')} />
            </div>
        );
    };

    return (
        <div className='fixed top-0 w-screen sm:w-[calc(100vw_-_200px)] bg-white px-8 h-[81px] flex items-center border-b-[0.5px] border-matteBlack/10'>
            <div className='sm:hidden block'>
                <IoMenuOutline size={28} onClick={() => dispatch(updateSidebar(true))} />
            </div>
            <div className='flex-1'>
                <TextButton label='Activity' size='lg' onClick={() => navigate('/')} />
            </div>
            <UserHeader />
        </div>
    );
}

export default Header;
