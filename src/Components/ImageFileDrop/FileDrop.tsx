import { Box, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileDrop() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 2097152,
    accept: {
      'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
    },
  });

  return (
    <>
      <Box border="dashed" height="220px">
        <Box {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <Typography>Drop the files here ...</Typography>
          ) : (
            <Typography>
              Hier kannst du per Drag'n'Drop oder per klick dein Coverbild
              hochladen
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
