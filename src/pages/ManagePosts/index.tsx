import { FilledButton, TextButton } from '~/components/Button';
import { useNavigate } from 'react-router-dom';
import { useDeletePostMutation, useGetPostsByAuthorQuery } from '~/redux/api/post';
import { useSelector } from 'react-redux';
import { userSelector } from '~/redux/reducers/user.reducer';
import { PostInterface } from '~/interfaces/post';
import ModalDialog from '~/components/ModalBox';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { CategoryInterface } from '~/interfaces/category';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { dateFormatter } from '~/utils/common';

function ManagePost() {
    const [page, setPage] = useState<number>(0);
    const { _id } = useSelector(userSelector);
    const navigate = useNavigate();
    const { isLoading, data } = useGetPostsByAuthorQuery({ authorId: _id || '', limit: 20, page });
    const [deletePostApi] = useDeletePostMutation();
    const [deletePost, setDeletePost] = useState<Partial<PostInterface> | null>();

    const postDeleteHandler = (postId: string) => {
        deletePostApi({ id: postId })
            .unwrap()
            .then(() => {
                toast.success('Post Successfully deleted');
                setDeletePost(null);
            });
    };

    return (
        <>
            <div className='grid place-items-end'>
                <FilledButton label='Create New Post' onClick={() => navigate('/posts')} />
            </div>
            {!isLoading && data && (
                <div>
                    <div className='grid grid-cols-1  max-h-[65vh] overflow-y-scroll md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
                        {data?.data?.map(({ _id, title, category, updatedDate, status }: PostInterface) => {
                            const postCategory: CategoryInterface = category as CategoryInterface;
                            return (
                                <div className='border-[0.5px] border-lightDark/20 p-4 rounded-md hover:cursor-pointer' key={_id}>
                                    <p className='text-lg my-2 line-clamp-1'>{title}</p>
                                    <p className='text-md my-2'>{postCategory?.name || ''}</p>
                                    <p className='text-sm my-2'>{status}</p>
                                    <p className='text-sm'>{dateFormatter(updatedDate)}</p>
                                    <div className='flex items-center justify-end'>
                                        <TextButton label='Edit' size='sm' onClick={() => navigate(`/posts/${_id}/edit`)} />
                                        <TextButton label='Delete' size='sm' onClick={() => setDeletePost({ _id, title })} />
                                    </div>
                                </div>
                            );
                        })}
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
            {deletePost && (
                <ModalDialog
                    title='Delete Post'
                    isFooter
                    cancelLabel='Cancel'
                    confirmLabel='Confirm'
                    onCancel={() => setDeletePost(null)}
                    onConfirm={() => deletePost?._id && postDeleteHandler(deletePost?._id)}
                >
                    <p>{`Are you sure to delete ${deletePost?.title}`}?</p>
                </ModalDialog>
            )}
        </>
    );
}

export default ManagePost;
