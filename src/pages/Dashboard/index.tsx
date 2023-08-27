import Masonry from '~/components/Masonry';
import Post from '~/components/Post';
import { PostInterface } from '~/interfaces/post';
import { useGetPostsQuery } from '~/redux/api/post';

function Acitivty() {
    const { isLoading, data, error } = useGetPostsQuery({ limit: 20, page: 0, search: '' });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something Wrong...</p>;

    return (
        <>
            {data && (
                <Masonry columns={3} gap={20}>
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
