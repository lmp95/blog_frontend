import { Dispatch, SetStateAction, useState } from 'react';
import AppLogo from '../../assets/logo.png';
import { IoAlbumsOutline, IoChevronDownOutline, IoChevronUpOutline, IoCloseOutline, IoDocumentTextOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '~/redux/reducers/user.reducer';
import { useGetCategoriesQuery } from '~/redux/api/category';
import { CategoryInterface } from '~/interfaces/category';
import { sidebarSelector, updateSidebar } from '~/redux/reducers/appState.reducer';

function Sidebar() {
    const navigate = useNavigate();
    const { token } = useSelector(userSelector);
    const sidebar = useSelector(sidebarSelector);
    const [isShow, setIsShow] = useState(false);
    const { data, isLoading } = useGetCategoriesQuery();
    const [selectedCategory, setSelectedCategory] = useState<string>();
    const dispatch = useDispatch();

    return (
        <div
            className={`sm:static z-50 ${
                sidebar ? 'translate-x-0' : '-translate-x-[100%]'
            } sm:translate-x-0 transition-all bg-white absolute flex overflow-hidden flex-col w-full h-full border-r-[1px] border-matteBlack/10`}
        >
            <div className='flex justify-between sm:grid place-items-center border-b-[0.5px] h-[90px] border-matteBlack/10'>
                <img src={AppLogo} className='w-[150px] ml-6 sm:ml-0 sm:w-3/4' alt='YouKnow' />
                <IoCloseOutline size={24} className='block sm:hidden mx-4' onClick={() => dispatch(updateSidebar(false))} />
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
                                        key={_id}
                                        onClick={() => {
                                            dispatch(updateSidebar(false));
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
                            <li
                                onClick={() => {
                                    dispatch(updateSidebar(false));
                                    navigate('/manage');
                                }}
                                className='cursor-pointer flex items-center gap-3 bg-white px-2 py-4'
                            >
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
