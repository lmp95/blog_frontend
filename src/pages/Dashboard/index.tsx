import { useEffect, useRef, useState } from 'react';
import { IoArrowBackOutline, IoArrowForwardOutline, IoSearchOutline } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';
import { IconButton } from '~/components/Button';
import { TextInputField } from '~/components/InputField';
import Masonry from '~/components/Masonry';
import Post from '~/components/Post';
import { PostInterface } from '~/interfaces/post';
import { useGetPostsQuery } from '~/redux/api/post';

function Acitivty() {
    const [page, setPage] = useState<number>(0);
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [searchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category');
    const searchRef = useRef<HTMLInputElement>(null);

    const { isLoading, data, error } = useGetPostsQuery({ limit: 20, page: page, search: searchKeyword, filter: categoryFilter || '' });
    const handleWindowResize = () => {
        if (window.innerWidth > 1440) return 4;
        if (window.innerWidth > 1024) return 3;
        if (window.innerWidth > 768) return 2;
        if (window.innerWidth < 640) return 1;
        return 1;
    };
    const [columns, setColumns] = useState<number>(handleWindowResize());

    useEffect(() => {
        window.addEventListener('resize', () => setColumns(handleWindowResize));
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something Wrong...</p>;

    return (
        <>
            {data && (
                <div className='flex flex-col gap-2 max-h-[85vh]'>
                    <div className='flex gap-4'>
                        <TextInputField ref={searchRef} placeholder='Search' name='search' />
                        <IconButton icon={<IoSearchOutline size={20} />} onClick={() => setSearchKeyword(searchRef?.current?.value || '')} />
                    </div>
                    <div className='flex-1 overflow-y-scroll'>
                        <Masonry columns={columns} gap={20}>
                            {data?.data?.map((post: PostInterface) => {
                                const height = 400 + Math.ceil(Math.random() * 250);
                                return <Post key={post?._id} cardHeight={height} post={post} />;
                            })}
                        </Masonry>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm mt-4 text-matteBlack/40 font-semibold'>Total - {data?.total}</p>
                        <div className='flex gap-4'>
                            <IoArrowBackOutline
                                onClick={() => page > 0 && setPage((prev) => prev - 1)}
                                size={28}
                                className='p-1 rounded-full hover:bg-lightDark/10 cursor-pointer text-primary'
                            />
                            <IoArrowForwardOutline
                                onClick={() => page < data?.total / data?.perPage - 1 && setPage((prev) => prev + 1)}
                                size={28}
                                className='p-1 rounded-full hover:bg-lightDark/10 cursor-pointer text-primary'
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Acitivty;
