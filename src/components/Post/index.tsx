import { PostInterface } from '~/interfaces/post';
import { TextButton } from '../Button';
import { useNavigate } from 'react-router-dom';

function Post({ cardHeight, post: { _id, title, category, content } }: PostProps) {
    const navigate = useNavigate();
    let maxLineClamp = 'line-clamp-2';
    if (cardHeight > 550 && cardHeight < 650) maxLineClamp = 'line-clamp-5';
    if (cardHeight > 400 && cardHeight < 500) maxLineClamp = 'line-clamp-4';
    if (cardHeight < 400) maxLineClamp = 'line-clamp-3';

    return (
        <div
            key={_id}
            className='bg-grey/50 flex flex-col overflow-hidden justify-between px-6 pt-6 rounded-lg hover:shadow-masonryCard transition-all'
            style={{ height: `${cardHeight}px` }}
        >
            <div className='flex flex-col overflow-hidden'>
                <img
                    className='h-[50%]'
                    alt='book'
                    src='https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
                />
                <p className='text-lg pt-2'>{title}</p>
                <p className='text-sm text-right py-4'>{category}</p>
                <p className={`h-auto text-justify ${maxLineClamp}`}>{content}</p>
            </div>
            <div className='grid place-items-end my-3'>
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
