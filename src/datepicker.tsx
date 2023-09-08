import React from 'react';
import { Field, FieldProps } from 'formik'; // Import FieldProps
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateOfBirth = () => {
  return (
    <div>
      <label>Date of Birth</label>
      <Field name="dob">
        {({ field, form }: FieldProps) => ( // Specify the type for field
          <DatePicker
            selected={field.value}
            onChange={(date) => form.setFieldValue(field.name, date)}
            dateFormat="dd/MM/yyyy"
          />
        )}
      </Field>
    </div>
  );
};

export default DateOfBirth;