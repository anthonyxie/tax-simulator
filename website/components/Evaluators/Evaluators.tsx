'use client';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import ArtItem from '../ArtItem/ArtItem';
import { Art, listOfEvaluators } from '@/models/stock';
import '../../resources/stylesheet.css';

interface EvalListProps {
  editArt?: any,
  art: Art,
}
function Evaluators({ editArt, art }: EvalListProps) {
  const evalList = listOfEvaluators;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = evalList.length;
  const [evalIndex, setEvalIndex] = useState<number>(0);
  const [evaluator, setEvaluator] = useState<string | null>(listOfEvaluators[0].name);

  useEffect(() => {
    let i = 0;
    const evalName = evaluator;
    for (let j = 0; j < listOfEvaluators.length; j++) {
        if (listOfEvaluators[j].name == evalName) {
            i = j;
        }
    }
    setEvalIndex(i);
}, [evaluator]);

useEffect(() => {
    // console.log(evalIndex);
    // console.log(art.prices);
}, [evalIndex, art]);

function submitAppraisal() {
    const newArt = { ...art };
    newArt.appraised = true;
    newArt.priceIndex = listOfEvaluators[evalIndex].index;
    editArt(newArt, art.index);
}
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  {/* <Modal opened={opened} onClose={close} centered>
                <Select
                  value={evaluator}
                  defaultValue={listOfEvaluators[0].name}
                  onChange={(value) => setEvaluator(value)}
                  data={listOfEvaluators.map((evaluator) => evaluator.name)}
                />
                <Button variant="filled" color="taupe" size="compact-md" onClick={submitAppraisal}>Submit Appraisal</Button>
            </Modal> */}

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
                <Button onClick={submitAppraisal}>Submit Appraisal</Button>
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
