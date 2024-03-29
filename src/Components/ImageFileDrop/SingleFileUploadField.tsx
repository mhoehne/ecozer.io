import React, { useCallback, useState } from 'react';
import { FileError, FileRejection, useDropzone } from 'react-dropzone';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

export interface UploadableFile {
  file: File;
  errors: FileError[];
}

export function SingleFileUploadField() {
  const [file, setFile] = useState<UploadableFile[]>([]);
  const onDrop = useCallback((accFile: File[], rejFile: FileRejection[]) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
}
