import { useField } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { FileError, FileRejection, useDropzone } from 'react-dropzone';

import { Box, Grid } from '@mui/material';

import { SingleFileUploadWithProgress } from './SingleFileUploadWithProgress';
import { UploadError } from './UploadError';

let currentId = 0;

function getNewId() {
  return ++currentId;
}

export interface UploadableFile {
  id: number;
  file: File;
  errors: FileError[];
  url?: string;
}

interface MultipleFileUploadFieldProps {
  onUpload: Function;
  name: string;
}

// const useStyles = makeStyles((theme) => ({
//   dropzone: {
//     border: `2px dashed ${theme.palette.primary.main}`,
//     borderRadius: theme.shape.borderRadius,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     background: theme.palette.background.default,
//     height: theme.spacing(10),
//     outline: 'none',
//   },
// }));

export default function MultipleFileUploadField(
  props: MultipleFileUploadFieldProps
) {
  const [_, __, helpers] = useField(props.name);
  // const classes = useStyles;

  const [files, setFiles] = useState<UploadableFile[]>([]);
  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({
      file,
      errors: [],
      id: getNewId(),
    }));
    const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }));
    setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
  }, []);

  useEffect(() => {
    helpers.setValue(files);
    // helpers.setTouched(true);
  }, [files]);

  function onUpload(file: File, url: string) {
    props.onUpload(url);
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      })
    );
  }

  function onDelete(file: File) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 2097152,
    accept: {
      'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
    },
  });

  return (
    <>
      <Grid container>
        <input {...getInputProps()} id="uploadField" />
        <label htmlFor="uploadField">
          <Box
            bgcolor="background.paper"
            color="text.primary"
            justify-content="center"
            sx={{
              height: '5rem',
              border: 'dashed',
              borderRadius: '5px',
              boxShadow: 0,
            }}
          >
            <div
              {...getRootProps({ className: 'dropzone' })}
              style={{ height: '100%' }}
            >
              Klicke hier um ein Bild hochzuladen oder füge es per Drag 'n' drop
              hinzu
            </div>
          </Box>
        </label>
      </Grid>

      {files.map((fileWrapper) => (
        <Grid item key={fileWrapper.id}>
          {fileWrapper.errors.length ? (
            <UploadError
              file={fileWrapper.file}
              errors={fileWrapper.errors}
              onDelete={onDelete}
            />
          ) : (
            <SingleFileUploadWithProgress
              onDelete={onDelete}
              onUpload={onUpload}
              file={fileWrapper.file}
            />
          )}
        </Grid>
      ))}
    </>
  );
}
