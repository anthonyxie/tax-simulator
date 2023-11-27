'use client';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import ArtItem from '../ArtItem/ArtItem';
import { listOfEvaluators } from '@/models/stock';
import '../../resources/stylesheet.css';

interface EvalListProps {
  evalList: Eval[]
}
function Evaluators() {
  const evalList = listOfEvaluators;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = evalList.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box id="evalDiv">
      <div>
        <text className="panelHeader">Evaluators</text>
      </div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {evalList.map((person, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className="flexCol" id="evalPersonDiv">
                <text>{person.name}</text>
                <div className="flexRow">
                  <img src={person.imgPath} alt="evalualtor person" />
                  <text>{person.quote}</text>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <text id="mobileStepTxt">Next</text>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            <text id="mobileStepTxt">Back</text>
          </Button>
        }
      />
    </Box>
  );
}

export default Evaluators;
