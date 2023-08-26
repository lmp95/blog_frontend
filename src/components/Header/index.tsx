import { useNavigate } from 'react-router-dom';
import { FilledButton, OutlinedButton, TextButton } from '../Button';

function Header() {
    const navigate = useNavigate();

    return (
        <div className='fixed top-0 w-[calc(100vw_-_200px)] bg-white px-8 h-[75px] flex items-center border-b-[0.5px] border-matteBlack/10'>
            <div className='flex-1'>
                <TextButton label='Activity' size='lg' onClick={() => navigate('/')} />
            </div>
            <div className='flex gap-2'>
                <FilledButton label='Login' onClick={() => navigate('/login')} />
                <OutlinedButton label='Sign Up' />
            </div>
        </div>
    );
}

export default Header;
