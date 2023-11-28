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
import { Tooltip } from '@mantine/core';
import { instructionList } from '@/models/stock';
import '../../resources/stylesheet.css';

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
          <text>In this game, you are an accoutant for a wealthy client, Elizabeth. </text>
          <text>You will learn <b>how rich people evade their taxes</b> and use those techniques on Elizabeth's portfolio to lower her taxes. Don't worry! It's totally legal! Well, most of it is anyway.</text>
        </div>
        <div className="flexCol">
          <text>At each level, use the given techniques to lower your client's taxes.</text>
          <text>Careful though! Different techniques have a different amount of <b>risk</b> associated with it that depends on the amount, legality, and type. </text>
          <text>Fill up the <b>risk bar</b> all the way and you certainly will get <b>audited and fired!</b> If you don't lower the taxes enough and play it too safe, then Elizabeth might fire you!</text>
        </div>
        <div className="flexCol">
          <text>Eventually, you will have to meet two goals: </text>
            <text>1. lower the tax </text>
            <text>2. liquidate enough assets </text>
            <br />
          <text>When Elizabeth demands you make a certain amount of funds "liquid" for her, that means she wants you to <b>liquidate</b> her assets for money.</text>
          <text>To <b>liquidate</b> assets means to trade valuable items in for cash. This could take the form of selling stocks or art.</text>
        </div>
        {/* How to Lose - Risk, auditing and getting fired */}
        <div className="flexCol">
          <text>Two ways to lose: </text>
            <text>1. Get Fired </text>
            <text>2. Get Audited </text>
            <br />
          <text></text>
          <text></text>
        </div>
        {/* Stages */}
        <div className="flexCol">
          <text>As the game progresses, you will unlock new tax evading techniques.</text>
          <br />
          <text>Level 1: Underreporting income & Charitable Donations</text>
          <text>Level 2: Donating Assets</text>
          <text>Level 3: Offshore Bank Accounts</text>
          <text>Level 4: Asset-based Loans</text>
        </div>
        {/* Property */}
        <div className="flexCol">
          <text>Properties generate property tax.</text>
          <br />
          <text>There's no action needed in this tab. The properties are displayed only so that you understand where your client's property taxes are coming from.</text>
          <text>They also tie into your client's journey of becoming uber-wealthy!</text>
        </div>
        {/* Bank */}
        <div className="flexCol">
          <text>When you keep money in the bank, it gains interest. Interest is money that banks add to your account for keeping your money with them.</text>
          <text>For an average person like you, getting 1% interest on your $10,000 saving account is nice, but when you are rich and get 1% on MILLIONS, that's not too shabby!</text>
          <br />
          <text>Interest is taxed as income. But if you keep that money in an
            <Tooltip withArrow label="bank account in another country"><b> off-shore bank account</b></Tooltip>
          , then the government wouldn't know what to tax!
          </text>
          <br />
          <text>You unlock the ability to open off-shore bank accounts in level 3.</text>
        </div>
        {/* Stocks */}
        <div className="flexCol">
          <text>Stocks are investments into other corporations.</text>
          <text>If their business is doing well, the value of the stocks go up! If their business is doing bad, the value of the stock goes down!</text>
          <br />
          <text>There are two ways you can use stocks here:</text>
          <text>1. Liquidate Stocks - sell the stocks to make liquid funds</text>
          <text>2. Use Stocks as Collateral for Asset-Based Loans - technique unlocked in level 4.</text>
        </div>
        {/* Charity */}
        <div className="flexCol">
          <text>Charitable donations are tax deductible! That means that the money you spent donating will be deducted from your taxed income.
          </text>
          <br />
          <text>Why is it risky? Well... who is the money going to?</text>
          <text>Donating to your client's own foundation gives you the same tax cuts, but you can recoup some funds from the charity under the table. Careful, as this also incurs more risk!</text>
        </div>
        {/* Salary */}
        <div className="flexCol">
          <text>A good ole technique - underreporting income!</text>
          <br />
          <text>They can't tax you on what they don't know you have.</text>
        </div>
        {/* Assets */}
        <div className="flexCol">
          <text>Assets refer to any item or resource of value owned by an individual or entity. Some examples are land, jewelry, and artwork.</text>
          <text>You may choose to donate assets (instead of money) to charities, which would give you a tax deduction of the same value as the asset.</text>
          <br />
          <text>You might wonder - how is the value of art determined? Well, that depends on which appraiser you use. </text>
          <text>You unlock the ability to donate assets in level 2.</text>
        </div>
        {/* Loans */}
        <div className="flexCol">
          <text>When the wealthy need cash, they might be reluctant to liquidate their assets that have appreciated in value, as they would get taxed on those gains (known as the Capital Gains tax). </text>
          <br />
          <text>Instead, they might choose to take out a loan with their assets as collateral. This means that if they cannot pay back the loan, the lender can seize those assets.
            Because their assets are valuable, these loans often have very low interest rates. This gives them cash without the associated tax. 
          </text>
          <br />
          <text>You unlock the ability to make asset-based loans in level 4.</text>
        </div>
        {/* End */}
        <div className="flexCol">
          Thanks for reading and good luck!
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
