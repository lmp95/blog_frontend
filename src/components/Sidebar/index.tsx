import AppLogo from '../../assets/logo.png';

function Sidebar() {
    return (
        <div className='flex overflow-hidden flex-col w-full h-full bg-white/80 border-r-[1px] border-matteBlack/10'>
            <div className='grid place-items-center border-b-[0.5px] h-[75px] border-matteBlack/10'>
                <img src={AppLogo} width='70%' alt='YouKnow' />
            </div>
        </div>
    );
}

export default Sidebar;
