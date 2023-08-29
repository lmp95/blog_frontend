import { DropdownOption } from '~/components/Dropdown';

export interface FieldInterface {
    name: string;
    label: string;
    type: 'text' | 'password' | 'number' | 'textarea' | 'dropdown';
    placeholder?: string;
    value: string;
    options?: DropdownOption[];
}
