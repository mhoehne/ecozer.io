import { Form, Formik } from 'formik';

import { Card, CardContent, Grid } from '@mui/material';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

export default function FileUploadBox() {
  return (
    <Card>
      <CardContent>
        <Formik initialValues={{}} onSubmit={() => {}}>
          {({ values, errors }) => (
            <Form>
              <Grid container spacing={2} direction="column">
                Test
              </Grid>
              <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
