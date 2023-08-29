import { useEffect, useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IconButton } from '~/components/Button';
import Form from '~/components/Form';
import { PostFields, postSchema } from '~/forms/postFields';
import { CategoryInterface } from '~/interfaces/category';
import { FieldInterface } from '~/interfaces/field';
import { PostInterface } from '~/interfaces/post';
import { useGetCategoriesQuery } from '~/redux/api/category';
import { useAddNewPostMutation } from '~/redux/api/post';
import { userSelector } from '~/redux/reducers/user.reducer';

function PostCreate() {
    const navigate = useNavigate();
    const user = useSelector(userSelector);
    const [addNewPost, { isLoading }] = useAddNewPostMutation();
    const { data: categoryList, isLoading: categoryLoading } = useGetCategoriesQuery();
    const [fields, setFields] = useState<FieldInterface[]>();

    const postCreateHandler = ({ title, category, content, author, status }: PostInterface) => {
        addNewPost({ title, category, content, author: author, status: 'Draft' })
            .unwrap()
            .then(() => {
                toast.success('Post Created Successfully!');
                navigate('/manage');
            });
    };

    useEffect(() => {
        if (categoryList) {
            categoryList?.map(({ _id, name }: CategoryInterface) => ({ _id, name }));
            const fieldId = PostFields.findIndex(({ name }) => name === 'category');
            PostFields[fieldId].options = categoryList;
            PostFields[fieldId].value = '';
            setFields(PostFields);
        }
    }, [categoryList]);

    return (
        <>
            <div className='mb-4'>
                <IconButton
                    icon={<IoArrowBackOutline size={12} className='group-hover:text-white text-lightDark transition-all' />}
                    onClick={() => navigate('/manage')}
                />
            </div>
            {!categoryLoading && categoryList && (
                <Form isLoading={isLoading} fields={fields || []} formBtnLabel='Create New Post' schema={postSchema} formSubmitHandler={postCreateHandler}>
                    <p className='text-sm my-4'>Author : {user.username}</p>
                </Form>
            )}
        </>
    );
}

export default PostCreate;
