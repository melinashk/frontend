import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';
import { Field, FieldProps } from 'formik';


const TextEditor = () => {
  const editor = useRef(null)

  return(
    <div>
      <label>About Youself</label>
      <Field name="about">
        {({ field, form }: FieldProps) => ( // Specify the type for field
          <JoditEditor
            ref={editor}
            onChange={(text) => form.setFieldValue(field.name, text)} value={''}          />
        )}
      </Field>
    </div>
  )
}

export default TextEditor