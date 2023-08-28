import { DropdownOption } from '~/components/Dropdown';

export interface FieldInterface {
    name: string;
    label: string;
    type: 'text' | 'password' | 'number' | 'textEditor' | 'dropdown';
    placeholder?: string;
    value: string;
    options?: DropdownOption[];
}
