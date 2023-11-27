import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import ArtItem from '../ArtItem/ArtItem';
import { Art, Eval } from '@/models/stock';
import '../../resources/stylesheet.css';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface ArtListProps {
  artsList: Art[],
  evalList: Eval[],
  editArt: any,
  donateArt: any,
  sellArt: any,
}
// eslint-disable-next-line max-len
function SwipeableTextMobileStepper({ artsList, evalList, editArt, donateArt, sellArt }: ArtListProps) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = artsList.length;

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
      {/* <text className="panelHeader">{artsList[activeStep].name}</text> */}
        <text className="panelHeader">Donable Assets Gallery</text>
      </div>
      <SwipeableViews
        id="artCarousel"
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {artsList.map((art, index) => (
          <div key={index} id="artCarouselDiv">
            {Math.abs(activeStep - index) <= 2 ? (
              // eslint-disable-next-line max-len
              <ArtItem evalList={evalList} donateArt={donateArt} editArt={editArt} art={art} index={index} key={index} sellArt={sellArt} />
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

export default SwipeableTextMobileStepper;
