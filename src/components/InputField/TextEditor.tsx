import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useController } from 'react-hook-form';

function TextEditor({ name, label, control }: TextEditorProps) {
    const { field } = useController({
        name: name,
        control,
        defaultValue: '',
    });
    return (
        <>
            <p className='text-sm pb-1'>{label}</p>
            <Editor
                editorState={field.value}
                onEditorStateChange={field.onChange}
                editorStyle={{
                    height: 200,
                    maxHeight: 200,
                }}
                editorClassName='editorClassName'
                toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link'],
                }}
            />
        </>
    );
}

export default TextEditor;

interface TextEditorProps {
    name: string;
    label: string;
    control?: any;
}
