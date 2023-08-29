import { PostInterface } from '~/interfaces/post';
import { TextButton } from '../Button';
import { useNavigate } from 'react-router-dom';
import { CategoryInterface } from '~/interfaces/category';
import { UserInterface } from '~/interfaces';

function Post({ cardHeight, post: { _id, title, category, content, author } }: PostProps) {
    const navigate = useNavigate();
    const postCategory: CategoryInterface = category as CategoryInterface;
    const postAuthor: UserInterface = author as UserInterface;

    return (
        <div
            key={_id}
            className='bg-grey/50 flex flex-col overflow-hidden justify-between px-6 pt-6 rounded-lg hover:shadow-masonryCard transition-all'
            style={{ height: `${cardHeight}px` }}
        >
            <div className='flex flex-col overflow-hidden'>
                <img
                    className='flex-[0.5]'
                    alt='book'
                    src='https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
                />
                <p className='text-lg pt-2'>{title}</p>
                <p className='text-sm text-right pt-2'>{postCategory?.name}</p>
                <p className={`h-auto text-justify mt-2 flex-[0.4] `}>{content}</p>
            </div>
            <div className='flex flex-row items-center justify-between my-3'>
                <p className='text-sm font-semibold'>Author - {postAuthor?.username}</p>
                <TextButton label='Read More' size='sm' onClick={() => navigate(`/posts/${_id}`)} />
            </div>
        </div>
    );
}

export default Post;

interface PostProps {
    cardHeight: number;
    post: PostInterface;
}
