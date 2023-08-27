import { FilledButton, TextButton } from '~/components/Button';
import { useNavigate } from 'react-router-dom';
import { useDeletePostMutation, useGetPostsByAuthorQuery } from '~/redux/api/post';
import { useSelector } from 'react-redux';
import { userSelector } from '~/redux/reducers/user.reducer';
import { PostInterface } from '~/interfaces/post';

function ManagePost() {
    const { _id } = useSelector(userSelector);
    const navigate = useNavigate();
    const { isLoading, data } = useGetPostsByAuthorQuery({ authorId: _id || '', limit: 20, page: 0 });
    const [deletePost] = useDeletePostMutation();

    const postDeleteHandler = (postId: string) => {
        deletePost({ id: postId })
            .unwrap()
            .then(() => console.log('Post Successfully deleted'))
            .catch((error) => console.log(error));
    };

    return (
        <>
            <div className='grid place-items-end'>
                <FilledButton label='Create New Post' onClick={() => navigate('/posts')} />
            </div>
            {!isLoading && (
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
                    {data?.data?.map(({ _id, title, category, updatedDate, status }: PostInterface) => (
                        <div className='border-[0.5px] border-lightDark/20 p-4 rounded-md hover:cursor-pointer' key={_id}>
                            <p className='text-lg my-2 line-clamp-1'>{title}</p>
                            <p className='text-md my-2'>{category}</p>
                            <p className='text-sm my-2'>{status}</p>
                            <p className='text-sm my-2'>{updatedDate}</p>
                            <div className='flex items-center justify-end'>
                                <TextButton label='Edit' size='sm' onClick={() => navigate(`/posts/${_id}/edit`)} />
                                <TextButton label='Delete' size='sm' onClick={() => _id && postDeleteHandler(_id)} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default ManagePost;
