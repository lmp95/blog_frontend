import { object, string } from 'yup';
import { FieldInterface } from '~/interfaces/field';

export const PostFields: FieldInterface[] = [
    {
        name: 'title',
        label: 'Title',
        placeholder: 'Title of the post',
        value: '',
        type: 'text',
    },
    {
        name: 'category',
        label: 'Category',
        placeholder: 'Category',
        value: '',
        type: 'text',
    },
    {
        name: 'content',
        label: 'Content',
        placeholder: '',
        value: '',
        type: 'text',
    },
];

export const postSchema = object({
    title: string().required('Title is required'),
    category: string().required('Category is required'),
    content: string().required('Post content is required'),
}).required();
