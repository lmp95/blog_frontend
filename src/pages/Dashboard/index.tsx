import Masonry from '~/components/Masonry';
import Post from '~/components/Post';
import { PostInterface } from '~/interfaces/post';
import { useGetPostsQuery } from '~/redux/api/post';

function Acitivty() {
    const { isLoading, data } = useGetPostsQuery({ limit: 20, page: 0 });

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <Masonry columns={3} gap={20}>
                    {data?.map((post: PostInterface) => {
                        const height = 400 + Math.ceil(Math.random() * 250);
                        return <Post cardHeight={height} post={post} />;
                    })}
                </Masonry>
            )}
        </>
    );
}

export default Acitivty;
