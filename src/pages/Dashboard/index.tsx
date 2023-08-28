import { useEffect, useRef, useState } from 'react';
import Masonry from '~/components/Masonry';
import Post from '~/components/Post';
import { PostInterface } from '~/interfaces/post';
import { useGetPostsQuery } from '~/redux/api/post';

function Acitivty() {
    const { isLoading, data, error } = useGetPostsQuery({ limit: 20, page: 0, search: '' });
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
                <Masonry columns={columns} gap={20}>
                    {data?.data?.map((post: PostInterface) => {
                        const height = 400 + Math.ceil(Math.random() * 250);
                        return <Post key={post?._id} cardHeight={height} post={post} />;
                    })}
                </Masonry>
            )}
        </>
    );
}

export default Acitivty;
