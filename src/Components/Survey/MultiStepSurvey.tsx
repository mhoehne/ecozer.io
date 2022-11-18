import { Field, Form, Formik, useFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Step, StepLabel, Stepper,
    Typography
} from '@mui/material';

import ContactForm from './ContactForm';
import FeedbackForm from './FeedbackForm';
import QuestionForm from './QuestionForm';

{
  /* TODO */
}
{
  /* 
  
  */
}

{
  /* Note: */
}
{
  /* 
  
  */
}

interface MultiStepSurveyProps {
  open: boolean;
  setOpen: Function;
}

const steps = ['Unternehmen', 'Fragen', 'Feedback'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <ContactForm />;
    case 1:
      return <QuestionForm />;
    case 2:
      return <FeedbackForm />;
    default:
      throw new Error('Unknown step');
  }
}

const validationSchema = yup.object({
  emailAddress: yup
    .string()
    .email('Bitte vollständige E-Mail-Adresse eingeben!')
    .required('E-Mail-Adresse ist erforderlich.'),
  name: yup.string().min(3, 'Name should be of minimum 3 characters length'),
});

const formik = useFormik({
  initialValues: {
    _id: undefined,
    name: '',
    emailAddress: '',
    issue: '',
    browser: '',
    pageName: '',
    feedbackField: '',
  },
  validationSchema: validationSchema,
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
    // CreateReporting(values)
    //   .then(() => {
    //     return navigate('/my-products');
    //   })
    //   .catch((msg) => {
    //     alert('error');
    //   });
  },
});

export default function MultiStepSurvey(props: MultiStepSurveyProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 3;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // Probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error('Du kannst diesen Schritt nicht überspringen');
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Dialog
        open={props.open}
        aria-labelledby="responsive-dialog-title"
        fullWidth={true}
      >
        <DialogTitle id="responsive-dialog-title">{'Umfrage'}</DialogTitle>
        <DialogContent>
          <Box sx={{ width: '100%' }}>
            <Stepper
              activeStep={activeStep}
              sx={{ backgroundColor: 'background.paper' }}
            >
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Du bist fertig! Vielen Dank für deine Teilnahme.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  {activeStep !== 0 && (
                    <Button
                      color="primary"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                      startIcon={<ArrowBackIosNewOutlinedIcon />}
                    >
                      zurück
                    </Button>
                  )}
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button
                    variant="contained"
                    sx={{ color: 'background.paper' }}
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Abschicken' : 'Weiter'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              props.setOpen(false);
            }}
          >
            Schließen
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
