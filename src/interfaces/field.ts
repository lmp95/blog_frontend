export interface FieldInterface {
    name: string;
    label: string;
    type: 'text' | 'password' | 'number';
    placeholder?: string;
    value: string;
    options?: any[];
}
