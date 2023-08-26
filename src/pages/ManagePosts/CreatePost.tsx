import { useNavigate } from 'react-router-dom';
import Form from '~/components/Form';
import { PostFields, postSchema } from '~/forms/postFields';
import { PostInterface } from '~/interfaces/post';
import { useAddNewPostMutation } from '~/redux/api/post';

function CreatePost() {
    const navigate = useNavigate();
    const [addNewPost, { isLoading }] = useAddNewPostMutation();

    const postCreateHandler = ({ title, category, content, author, status }: PostInterface) => {
        addNewPost({ title, category, content, author: 'Author 1', status: 'Draft' })
            .unwrap()
            .then(() => navigate('/'))
            .catch((error) => console.log(error));
    };

    return (
        <Form isLoading={isLoading} fields={PostFields} formBtnLabel='Create New Post' schema={postSchema} formSubmitHandler={postCreateHandler}>
            <p className='text-sm mb-2'>Author : Current login user</p>
        </Form>
    );
}

export default CreatePost;
