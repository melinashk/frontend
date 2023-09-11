// import { useState } from "react";
// import { Field, FieldProps } from "formik";

// const FileUpload = () => {
//   const [file, setFile] = useState<File | null>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0]; // Use optional chaining to safely access files[0]
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   return (
//     <div>
//       <label>Photo</label>
//       <Field 
//       <input onChange={handleFileChange} type="file" />
//     </div>
//   );
// };

// export default FileUpload;