import clsx from "clsx";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { MdOutlineCloudUpload } from "react-icons/md";

interface DropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
  dropzoneClassName?: string;
  dropzoneTextClassName?: string;
  text: React.ReactNode;
}

const DropzoneComponent: React.FC<DropzoneProps> = ({
  onDrop,
  dropzoneClassName,
  dropzoneTextClassName,
  text,
}) => {
  const onDropCallback = useCallback(
    (acceptedFiles: any) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDropCallback,
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div {...getRootProps()} className="cursor-pointer">
        <input {...getInputProps()} />
        <div
          className={clsx(
            dropzoneClassName === undefined || null
              ? "border border-dashed border-gray-300 p-6 rounded-lg"
              : dropzoneClassName
          )}
        >
          <MdOutlineCloudUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p
            className={clsx(
              dropzoneTextClassName === undefined || null
                ? "text-gray-600"
                : dropzoneTextClassName
            )}
          >
            {text === undefined || null
              ? "Drag & drop files here or click to select"
              : text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropzoneComponent;
export type { DropzoneProps };
