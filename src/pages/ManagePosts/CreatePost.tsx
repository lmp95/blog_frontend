import { IoArrowBackOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '~/components/Button';
import Form from '~/components/Form';
import { PostFields, postSchema } from '~/forms/postFields';
import { PostInterface } from '~/interfaces/post';
import { useAddNewPostMutation } from '~/redux/api/post';
import { userSelector } from '~/redux/reducers/user.reducer';

function CreatePost() {
    const navigate = useNavigate();
    const user = useSelector(userSelector);

    const [addNewPost, { isLoading }] = useAddNewPostMutation();

    const postCreateHandler = ({ title, category, content, author, status }: PostInterface) => {
        addNewPost({ title, category, content, author: 'Author 1', status: 'Draft' })
            .unwrap()
            .then(() => navigate('/'))
            .catch((error) => console.log(error));
    };

    return (
        <>
            <div className='mb-4'>
                <IconButton
                    icon={<IoArrowBackOutline size={12} className='group-hover:text-white text-lightDark transition-all' />}
                    onClick={() => navigate('/manage')}
                />
            </div>
            <Form isLoading={isLoading} fields={PostFields} formBtnLabel='Create New Post' schema={postSchema} formSubmitHandler={postCreateHandler}>
                <p className='text-sm mb-2'>Author : {user.username}</p>
            </Form>
        </>
    );
}

export default CreatePost;
