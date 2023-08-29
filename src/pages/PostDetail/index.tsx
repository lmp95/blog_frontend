import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { IconButton } from '~/components/Button';
import { useGetPostDetailQuery } from '~/redux/api/post';

function PostDetail({ isEdit }: PostDetailProps) {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading } = useGetPostDetailQuery({ id: id || '' });

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <div className='mb-4'>
                <IconButton
                    icon={<IoArrowBackOutline size={12} className='group-hover:text-white text-lightDark transition-all' />}
                    onClick={() => navigate('/')}
                />
            </div>
            {data && (
                <div className='flex flex-col gap-3'>
                    <p className='text-h3'>{data?.title}</p>
                    <p className='text-sm'>{data?.category}</p>
                    <p className='text-justify'>{data?.content}</p>
                    <p className='text-sm'>{data?.author}</p>
                    <p className='text-sm'>{data?.updatedDate}</p>
                </div>
            )}
        </>
    );
}

export default PostDetail;

interface PostDetailProps {
    isEdit: boolean;
}
