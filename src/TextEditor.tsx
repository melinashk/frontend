import React, { Fragment, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { Field, FieldAttributes, FieldProps } from 'formik';


const TextEditor = () => {
  const editor = useRef(null)
  const[content, setContent] = useState('')

  return(

    <div>
      <label>About Youself</label>
      <Field name="about">
        {({ field, form }: FieldProps) => ( // Specify the type for field
          <JoditEditor
            ref={editor}
            onChange={(date) => form.setFieldValue(field.name, date)} value={''}          />
        )}
      </Field>
    </div>
  )
}

export default TextEditor