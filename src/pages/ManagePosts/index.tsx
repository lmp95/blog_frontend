import { FilledButton } from '~/components/Button';
import CreatePost from './CreatePost';

function ManagePost() {
    return (
        <>
            <div className='grid place-items-end'>
                <FilledButton label='Create New Post' />
            </div>
            <CreatePost />
        </>
    );
}

export default ManagePost;
