import { useNavigate } from 'react-router-dom';
import { FilledButton, OutlinedButton, TextButton } from '../Button';
import { useSelector } from 'react-redux';
import { userSelector } from '~/redux/reducers/user.reducer';
import { IoPersonCircleOutline } from 'react-icons/io5';

function Header() {
    const { username, role, token } = useSelector(userSelector);
    const navigate = useNavigate();

    const UserHeader = () => {
        if (username && token) {
            return (
                <>
                    <IoPersonCircleOutline size={24} className='text-primary/80' />
                    <p className='text-sm text-primary'>{username}</p>
                </>
            );
        }
        return (
            <>
                <FilledButton label='Login' onClick={() => navigate('/login')} />
                <OutlinedButton label='Sign Up' onClick={() => navigate('/register')} />
            </>
        );
    };

    return (
        <div className='fixed top-0 w-[calc(100vw_-_200px)] bg-white px-8 h-[75px] flex items-center border-b-[0.5px] border-matteBlack/10'>
            <div className='flex-1'>
                <TextButton label='Activity' size='lg' onClick={() => navigate('/')} />
            </div>
            <div className={`flex gap-2 items-center ${username && token ? 'cursor-pointer' : 'cursor-default'}`}>
                <UserHeader />
            </div>
        </div>
    );
}

export default Header;
