import { TextField } from '@material-ui/core';
import { useField, FieldAttributes } from 'formik'

interface Props extends FieldAttributes<any>{
  label: string;
  name:string;
}

const InputField = ({label, ...props}: Props) => {
  const [field, meta] = useField(props)
  return (
    <TextField 
      fullWidth 
      label={label} 
      {...field} 
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}/>
  )
}

export default InputField