import { Form, Formik } from 'formik';
import { array, object, string } from 'yup';

import { Card, CardContent, Grid } from '@mui/material';

import MultipleFileUploadField from './MultipleFileUploadField';

interface ImageFileUploadIndexProps {
  onUpload: Function;
}

export default function ImageFileUploadIndex(props: ImageFileUploadIndexProps) {
  return (
    <Card elevation={0}>
      <CardContent>
        <Formik
          initialValues={{ files: [] }}
          validationSchema={object({
            files: array(
              object({
                url: string().required(),
              })
            ),
          })}
          onSubmit={(values) => {
            console.log('values', values);
            return new Promise((res) => setTimeout(res, 2000));
          }}
        >
          {({ values, errors, isValid, isSubmitting }) => (
            // TODO:
            // remove the form & submit button,
            // store image URL in a useState,
            // so it can be use when submitting the entire form
            <Form>
              <Grid container spacing={2} direction="column">
                <MultipleFileUploadField
                  name="files"
                  onUpload={props.onUpload}
                />

                <Grid item>
                  {/* <Button
                    variant="contained"
                    color="primary"
                    disabled={!isValid || isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button> */}
                </Grid>
              </Grid>

              <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
