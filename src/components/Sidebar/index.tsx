import { useState } from 'react';
import AppLogo from '../../assets/logo.png';
import { IoAlbumsOutline, IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

function Sidebar() {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className='flex overflow-hidden flex-col w-full h-full bg-white/80 border-r-[1px] border-matteBlack/10'>
            <div className='grid place-items-center border-b-[0.5px] h-[75px] border-matteBlack/10'>
                <img src={AppLogo} width='70%' alt='YouKnow' />
            </div>
            <div className='w-full h-full'>
                <ul>
                    <div onClick={() => setIsShow(!isShow)}>
                        <li className='cursor-pointer flex items-center gap-3 bg-white px-2 py-4'>
                            <span>
                                <IoAlbumsOutline size={20} />
                            </span>
                            <p className='flex-1'>Category</p>
                            <span>{isShow ? <IoChevronUpOutline size={12} /> : <IoChevronDownOutline size={12} />}</span>
                        </li>
                        <ul className={`bg-grey text-sm ${isShow ? 'max-h-[300px]' : 'max-h-0'} transition-all overflow-y-scroll`}>
                            <li className='px-2 py-4'>Data Structure</li>
                            <li className='px-2 py-4'>UI/UX</li>
                            <li className='px-2 py-4'>Algorithms</li>
                            <li className='px-2 py-4'>React</li>
                            <li className='px-2 py-4'>NodeJS</li>
                            <li className='px-2 py-4'>Data Structure</li>
                            <li className='px-2 py-4'>UI/UX</li>
                            <li className='px-2 py-4'>Algorithms</li>
                            <li className='px-2 py-4'>React</li>
                            <li className='px-2 py-4'>NodeJS</li>
                        </ul>
                    </div>
                    <div>
                        <li className='cursor-pointer flex items-center gap-3 bg-white px-2 py-4'>
                            <span>
                                <IoAlbumsOutline size={20} />
                            </span>
                            <p className='flex-1'>Settings</p>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
