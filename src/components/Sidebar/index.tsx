import { useState } from 'react';
import AppLogo from '../../assets/logo.png';
import { IoAlbumsOutline, IoChevronDownOutline, IoChevronUpOutline, IoDocumentTextOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '~/redux/reducers/user.reducer';
import { useGetCategoriesQuery } from '~/redux/api/category';
import { CategoryInterface } from '~/interfaces/category';

function Sidebar() {
    const navigate = useNavigate();
    const { token } = useSelector(userSelector);
    const [isShow, setIsShow] = useState(false);
    const { data, isLoading } = useGetCategoriesQuery();
    const [selectedCategory, setSelectedCategory] = useState<string>();

    return (
        <div className='flex overflow-hidden flex-col w-full h-full bg-white/80 border-r-[1px] border-matteBlack/10'>
            <div className='grid place-items-center border-b-[0.5px] h-[82px] border-matteBlack/10'>
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
                        {!isLoading && data && (
                            <ul className={`bg-lightDark/5 text-sm ${isShow ? 'max-h-[350px]' : 'max-h-0'} transition-all overflow-y-scroll`}>
                                {data.map(({ _id, name }: CategoryInterface) => (
                                    <li
                                        onClick={() => {
                                            setSelectedCategory(_id);
                                            navigate('/');
                                        }}
                                        className={`${
                                            selectedCategory === _id ? 'bg-primary text-white' : ''
                                        } hover:bg-primary hover:text-white text-sm p-4 cursor-pointer`}
                                    >
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {token && (
                        <div>
                            <li onClick={() => navigate('/manage')} className='cursor-pointer flex items-center gap-3 bg-white px-2 py-4'>
                                <span>
                                    <IoDocumentTextOutline size={20} />
                                </span>
                                <p className='flex-1'>Manage Posts</p>
                            </li>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
