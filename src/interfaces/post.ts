import { CategoryInterface } from './category';
import { UserInterface } from './user';

export interface PostInterface {
    _id?: string;
    title: string;
    status: string;
    content: string;
    category: string | CategoryInterface;
    author: string | UserInterface;
    createdBy: string;
    createdDate: string;
    updatedBy: string;
    updatedDate: string;
}
