import { useState } from "react";

type FileUploadProps = {
  onFileChange: (file: File) => void;
};

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      onFileChange(selectedFile);
    }
  };

  return (
    <div>
      <label>Photo</label>
      <input onChange={handleFileChange} type="file" />
    </div>
  );
};

export default FileUpload;
