import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { IconButton } from '~/components/Button';
import Form from '~/components/Form';
import { PostFields, postSchema } from '~/forms/postFields';
import { PostInterface } from '~/interfaces/post';
import { useGetPostDetailQuery, useUpdatePostMutation } from '~/redux/api/post';

function PostDetail({ isEdit }: PostDetailProps) {
    const { id } = useParams();
    const { data, isLoading } = useGetPostDetailQuery({ id: id || '' });
    const [updatePost] = useUpdatePostMutation();
    const navigate = useNavigate();

    if (isLoading) return <p>Loading...</p>;

    if (isEdit) {
        const editPostHandler = (formData: PostInterface) => {
            data?._id && updatePost({ id: data?._id, body: formData });
        };
        return (
            <>
                <div className='mb-4'>
                    <IconButton
                        icon={<IoArrowBackOutline size={12} className='group-hover:text-white text-lightDark transition-all' />}
                        onClick={() => navigate('/manage')}
                    />
                </div>
                <Form
                    initialValues={data}
                    isLoading={isLoading}
                    fields={PostFields}
                    formBtnLabel='Edit'
                    schema={postSchema}
                    formSubmitHandler={editPostHandler}
                />
            </>
        );
    }

    return (
        <>
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
