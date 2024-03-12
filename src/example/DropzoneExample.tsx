import React, { useState } from "react";
import DropzoneComponent from "../components/Dropzone/DropzoneComponent";

const DropzoneExample = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleDrop = (acceptedFiles: File[]) => {
    setUploadedFiles(acceptedFiles);
  };

  return (
    <div>
      <DropzoneComponent
        onDrop={handleDrop}
        text="Drag & drop files here or click to select"
      />
     <div className="mt-2 text-center">
        <ul>
          {uploadedFiles.map((file, index) => ( 
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropzoneExample;
