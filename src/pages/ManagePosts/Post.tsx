import PostCreate from './createPost';
import PostUpdate from './updatePost';

function Post({ type = 'create' }: PostFormProps) {
    let formComponent;
    if (type === 'create') {
        formComponent = <PostCreate />;
    } else if (type === 'update') {
        formComponent = <PostUpdate />;
    }
    return formComponent;
}

export default Post;

interface PostFormProps {
    type?: 'create' | 'update';
}
