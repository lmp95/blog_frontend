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
        name: 'content',
        label: 'Content',
        placeholder: '',
        value: '',
        type: 'textarea',
    },
    {
        name: 'category',
        label: 'Category',
        placeholder: 'Please choose category',
        value: '',
        options: [],
        type: 'dropdown',
    },
    {
        name: 'status',
        label: 'Published',
        value: '',
        type: 'checkbox',
    },
];

export const postSchema = object({
    title: string().required('Title is required'),
    category: string().required('Category is required'),
    content: string().required('Content is required'),
    status: string(),
}).required();
