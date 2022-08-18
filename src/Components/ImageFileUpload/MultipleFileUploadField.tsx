import { Grid, makeStyles, Box } from '@mui/material';
import { useField } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { FileError, FileRejection, useDropzone } from 'react-dropzone';
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

export default function MultipleFileUploadField({ name }: { name: string }) {
  const [_, __, helpers] = useField(name);
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
      <Grid item>
        <Box
          bgcolor="background.paper"
          color="text.primary"
          justify-content="center"
          sx={{ height: '5rem', border: 'dashed', borderRadius: '5px' }}
        >
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p justify-content="center">
              Klicke hier um ein Bild hochzuladen oder füge es per Drag 'n' drop
              hinzu
            </p>
          </div>
        </Box>
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
