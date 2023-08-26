import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function TextEditor() {
    return (
        <Editor
            // editorState={editorState}
            editorClassName='editorClassName'
            // onEditorStateChange={onEditorStateChange}
        />
    );
}

export default TextEditor;
