import { useParams } from 'react-router-dom';
import { PostInterface } from '~/interfaces/post';
import { useGetPostDetailQuery } from '~/redux/api/post';

function PostDetail() {
    const { id } = useParams();
    const { data, isLoading } = useGetPostDetailQuery({ id: id || '' });

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            {data && (
                <div>
                    <h1>{data?.title}</h1>
                    <p>{data?.category}</p>
                    <p>{data?.content}</p>
                    <h3>{data?.author}</h3>
                </div>
            )}
        </>
    );
}

export default PostDetail;
