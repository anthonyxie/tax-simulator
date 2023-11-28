import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Divider, Modal, NumberInput, Select } from '@mantine/core';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { Property } from '@/models/stock';
import PropertyItem from '../PropertyItem/PropertyItem';
import '../../resources/stylesheet.css';

interface PropertyListProps {
    propertiesList: Property[]
}

// eslint-disable-next-line max-len
export default function PropertyList({ propertiesList }: PropertyListProps) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = propertiesList.length;

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
    <Box id="artDiv">
      <div>
        <text className="panelHeader">Property Gallery</text>
      </div>
      <SwipeableViews
        id="artCarousel"
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {propertiesList.map((property, index) => (
          <div key={index} id="artCarouselDiv">
            {Math.abs(activeStep - index) <= 2 ? (
              // eslint-disable-next-line max-len
              <PropertyItem property={property} key={index} />
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
