'use client';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import { Image } from '@mantine/core';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { Art, Eval } from '@/models/stock';
import '../../resources/stylesheet.css';

interface EvalListProps {
  editArt?: any,
  evalList: Eval[],
  art: Art,
  index: number
}
function Evaluators({ evalList, editArt, art, index }: EvalListProps) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = evalList.length;
  const [evalIndex, setEvalIndex] = useState<number>(0);
  const [evaluator, setEvaluator] = useState<string | null>(evalList[0].name);

  useEffect(() => {
    let i = 0;
    const evalName = evaluator;
    for (let j = 0; j < evalList.length; j++) {
        if (evalList[j].name === evalName) {
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
    newArt.priceIndex = evalList[evalIndex].index;
    editArt(newArt, index);
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
                <div className="flexRow">
                  <div id="appraiseImgDiv">
                    <Image id="appraiseImg" src={person.imgPath} fit="contain" w="auto" h="auto" radius="md" alt="evalulator person" />
                  </div>
                  <div className="flexCol" id="appraiseDiv">
                    <div className="flexCol">
                      <text id="evalName">{person.name}</text>
                      <text>{person.quote}</text>
                    </div>
                    <div id="appraiseBttn" onClick={submitAppraisal}>
                      Choose Me as to Appraise!
                    </div>
                  </div>
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
