export interface FieldInterface {
    name: string;
    label: string;
    type: 'text' | 'password' | 'number' | 'textEditor';
    placeholder?: string;
    value: string;
    options?: any[];
}
