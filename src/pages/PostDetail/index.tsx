import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { IconButton } from '~/components/Button';
import { UserInterface } from '~/interfaces';
import { CategoryInterface } from '~/interfaces/category';
import { useGetPostDetailQuery } from '~/redux/api/post';
import { dateFormatter } from '~/utils/common';

function PostDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading } = useGetPostDetailQuery({ id: id || '' });
    const postAuthor: UserInterface = data?.author as UserInterface;
    const postCategory: CategoryInterface = data?.category as CategoryInterface;
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
                    <p className='text-sm'>{postCategory?.name}</p>
                    <p className='text-justify'>{data?.content}</p>
                    <p className='text-sm'>{postAuthor?.username}</p>
                    <p className='text-sm'>{dateFormatter(data?.updatedDate)}</p>
                </div>
            )}
        </>
    );
}

export default PostDetail;
