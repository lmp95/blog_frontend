import { FilledButton, OutlinedButton, TextButton } from '../Button';

function Header() {
    return (
        <>
            <div className='flex-grow px-8 h-[75px] flex items-center border-b-[0.5px] border-matteBlack/10'>
                <div className='flex-1'>
                    <TextButton label='Activity' size='lg' />
                </div>
                <div className='flex gap-2'>
                    <FilledButton label='Login' onClick={() => console.log('Route to login')} />
                    <OutlinedButton label='Sign Up' />
                </div>
            </div>
        </>
    );
}

export default Header;
