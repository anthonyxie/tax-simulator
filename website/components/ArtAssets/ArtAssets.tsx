import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ArtItem from '../ArtItem/ArtItem';
import { Art } from '@/models/stock';
import '../../resources/stylesheet.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Nepo Baby Artwork',
    imgPath: '/assetsImgs/vase.png',
  },
  {
    label: 'Narry Stight by Paclo Pibasso',
    imgPath: '/assetsImgs/monet.png',
  },
  {
    label: 'Picture of a dog',
    imgPath: '/assetsImgs/bunny.png',
  },
];

interface ArtListProps {
  artsList: Art[]
  editArt: any
  donateArt: any
  sellArt: any
}
function SwipeableTextMobileStepper({ artsList, editArt, donateArt, sellArt }: ArtListProps) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
        <text className="panelHeader">{images[activeStep].label}</text>
      </div>
      <AutoPlaySwipeableViews
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
              <ArtItem donateArt={donateArt} editArt={editArt} art={art} index={index} key={index} sellArt={sellArt} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
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
            Next
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
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
