import React, { useState } from "react";
import { Button, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FormProvider, useForm } from "react-hook-form";

import { Yearss, DropFiles } from "./";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

const getSteps = () => {
  return [
    'Select Year',
    'Upload File',
    'Import & Export',
    'complete'
  ];
}

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <Yearss />;
    case 1:
      return <DropFiles />;
    // case 2:
    // return ;
    case 2:
      return 'Hii';
    case 3:
      return 'Byee';
    default:
      return "unknown step";
  }
}

const Wizard = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {

    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      // fetch("https://jsonplaceholder.typicode.com/comments")
      fetch(' ')
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      // setSkippedSteps(
      //   skippedSteps.filter((skipItem) => skipItem !== activeStep)
      // );
    }

  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <div style={{ alignItems: 'center' }}>
          <FormProvider {...methods} >
            <form
              onSubmit={methods.handleSubmit(handleNext)}
            >
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}

                onClick={handleBack}
              >
                back
              </Button>
              <Button
                className={classes.button}
                disabled={activeStep === 0}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                // onClick={methods.handleSubmit(handleNext)}
                type="submit"
              >
                {/* Next */}
                {activeStep === steps.length - 1 ? "Finish" : activeStep === 1 ? "Upload" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </div>
      )}
    </div>
  );
};

export { Wizard };