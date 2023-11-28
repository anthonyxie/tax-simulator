'use client';

/* eslint-disable max-len */
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { instructionList } from '@/models/stock';
import '../../resources/stylesheet.css';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// eslint-disable-next-line max-len
function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = instructionList.length;

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
    <Box>
      <div>
        <text className="panelHeader">{instructionList[activeStep].title}</text>
      </div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {/* {instructionList.map((art, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              // eslint-disable-next-line max-len
              <text>{instructionList[index].text}</text>
            ) : null}
          </div>
        ))} */}
        <div className="flexCol">
          <text>Welcome to Tax Hero! </text>
          <text>In this game, you are an accoutant for a wealthy client - Elizabeth. </text>
          <text>You will learn how rich people evade their taxes and use those techniques on Elizabeth's portfolio to lower her taxes. Don't worry! It's totally legal! Well, most of it is anyway.</text>
        </div>
        <div className="flexCol">
          <text>At each level, use the given techniques to lower your client's taxes.</text>
          <text>Careful though! Different techniques have a different amount of risk associated with it that depends on the amount, legality, and type. </text>
          <text>Fill up the risk bar all the way and you certainly will get audited and fired! If you don't lower the taxes enough and play it too safe, then Elizabeth might fire you!</text>
        </div>
        <div className="flexCol">
          <text>Eventually, you will have to meet two goals: </text>
            <text>1. lower the tax </text>
            <text>2. liquidate enough assets </text>
          <text>When Elizabeth demands you make a certain amount of funds "liquid" for her the means she wants you to liquidate her assets.</text>
          <text>To liquidate assets means to take things that are worth money and trade them in for actual money. This could take the form of selling stocks or art.</text>
        </div>
        {/* Stages */}
        <div className="flexCol">
          <text>As the game progresses, you will unlock new tax evading techniques.</text>
          <text>Level 1: Underreporting income & Charitable Donations</text>
          <text>Level 2: Donating Assets</text>
          <text>Level 3: Offshore Bank Accounts</text>
          <text>Level 4: Asset-based Loans</text>
        </div>
        {/* Property */}
        <div className="flexCol">
          <text>Properties generate property tax.</text>
          <text>There's no action needed in this tab as the properties as there only to provide the source of property tax.</text>
          <text>They also tie into your client's journey of becoming uber-wealthy!</text>
        </div>
        {/* Bank */}
        <div className="flexCol">
          <text>When you keep money in the bank, it gains interest. Interest is money that banks add to your account for keeping your money with them.</text>
          <text>For an average person like you, getting 1% interest on your $10,000 saving account is nice, but when you are rich and get 1% on MILLIONS, that's not too shabby!</text>
          <br />
          <text>Interest is taxed as income. But if you keep that money in an off-shore bank account (bank account in another country), then the government wouldn't know to tax!</text>
          <br />
          <text>You unlock the ability to open off-shore bank accounts in level 3.</text>
        </div>
        {/* Stocks */}
        <div className="flexCol">
          stage 3
        </div>
        {/* Charity */}
        <div className="flexCol">
          stage 1
        </div>
        {/* Salary */}
        <div className="flexCol">
          stage 2
        </div>
        {/* Assets */}
        <div className="flexCol">
          stage 3
        </div>
        {/* Loans */}
        <div className="flexCol">
          stage 3
        </div>
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
            <text>Next</text>
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
            <text>Back</text>
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
