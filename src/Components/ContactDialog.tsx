import * as React from 'react';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

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
        <DialogContent></DialogContent>
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
