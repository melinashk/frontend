// import React, { useRef } from 'react';
// import JoditEditor from 'jodit-react';
// import { Field, FieldProps } from 'formik';


// const TextEditor = () => {
//   const editor = useRef(null)

//   return(
//     <div>
//       <label>About Youself</label>
//       <Field name="about">
//         {({ field, form }: FieldProps) => ( // Specify the type for field
//           <JoditEditor
//             ref={editor}
//             onChange={(text) => form.setFieldValue(field.name, text)} value={''}          />
//         )}
//       </Field>
//     </div>
//   )
// }

// export default TextEditor


import React, { useRef } from 'react';
 import { Editor } from '@tinymce/tinymce-react';

 type TinyMCEEditor = {
    getContent: () => string;
  };

  type TextEditorProps = {
    onTextChange: (text: string) => void; // Callback to update text in the parent component
  };
  
  const TextEditor: React.FC<TextEditorProps> = ({ onTextChange }) => {
    const editorRef = useRef<TinyMCEEditor | null>(null);
  
    // Function to handle TinyMCE editor content change
    const handleEditorChange = () => {
      if (editorRef.current) {
        // Get the editor content and pass it to the parent component
        const content = editorRef.current.getContent();
        onTextChange(content);
      }
    };
  
   return (
     <>
       <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         onChange={handleEditorChange}
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
       />
     </>
   );
 }

 export default TextEditor