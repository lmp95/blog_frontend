import { useEffect, useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IconButton } from '~/components/Button';
import Form from '~/components/Form';
import { PostFields, postSchema } from '~/forms/postFields';
import { CategoryInterface } from '~/interfaces/category';
import { FieldInterface } from '~/interfaces/field';
import { PostInterface } from '~/interfaces/post';
import { useGetCategoriesQuery } from '~/redux/api/category';
import { useGetPostDetailQuery, useUpdatePostMutation } from '~/redux/api/post';
import { userSelector } from '~/redux/reducers/user.reducer';

function PostUpdate() {
    const navigate = useNavigate();
    const { id } = useParams();
    const user = useSelector(userSelector);
    const { data, isLoading: getPostLoading } = useGetPostDetailQuery({ id: id || '' });
    const { data: categoryList, isLoading: categoryLoading } = useGetCategoriesQuery();
    const [updatePost, { isLoading: updatePostLoading }] = useUpdatePostMutation();
    const [fields, setFields] = useState<FieldInterface[]>();

    useEffect(() => {
        if (categoryList && data) {
            categoryList?.map(({ _id, name }: CategoryInterface) => ({ _id, name }));
            const fieldId = PostFields.findIndex(({ name }) => name === 'category');
            PostFields[fieldId].options = categoryList;
            PostFields[fieldId].value = data?.category as string;
            setFields(PostFields);
        }
    }, [categoryList, data]);

    const editPostHandler = (formData: PostInterface) => {
        data?._id &&
            updatePost({ id: data?._id, body: formData })
                .unwrap()
                .then(() => toast.success('Post Updated Successfully!'));
    };

    return (
        <>
            <div className='mb-4'>
                <IconButton
                    icon={<IoArrowBackOutline size={12} className='group-hover:text-white text-lightDark transition-all' />}
                    onClick={() => navigate('/manage')}
                />
            </div>
            {!getPostLoading && !categoryLoading && (
                <Form
                    initialValues={data}
                    isLoading={updatePostLoading}
                    fields={fields || []}
                    formBtnLabel='Edit'
                    schema={postSchema}
                    formSubmitHandler={editPostHandler}
                >
                    <p className='text-sm my-4'>Author : {user.username}</p>
                </Form>
            )}
        </>
    );
}

export default PostUpdate;
