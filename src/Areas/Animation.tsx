import { useEffect, useState } from 'react';
import { Box, Button, Fade, Slide, useMediaQuery } from '@mui/material';
import FadedImageComponent from '../Components/FadedImageComponent';
import Image from '../Components/Image';

import Logo from '../assets/Animation/4/LOGO.png';
import textoImagen from '../assets/Animation/4/texto-inferior-imagen.png';
import image1 from '../assets/Animation/1/imagen.png';
import image2 from '../assets/Animation/2/imagen.png';
import image3 from '../assets/Animation/3/imagen.png';
import image4 from '../assets/Animation/4/imagen.png';
import ChristmasImage from '../assets/christmas-component.png';

import mach1 from '../assets/Animation/1/mach.png';
import alcancia2 from '../assets/Animation/2/alcancia.png';
import mach3 from '../assets/Animation/3/mach.png';
import alcancia4 from '../assets/Animation/4/alcancia.png';
import { regularFadeTime } from '../const/fadeTimes';
import LinearProgressCustom from '../Components/LinearProgressCustom';

const validTheLenght = (valueDisplayed: number | any, ImagesArray: any[]) => {
  if (valueDisplayed === null) {
    return 1;
  }
  if (valueDisplayed >= ImagesArray.length) return 1;
  return valueDisplayed + 1;
};
const FirstImage = <FadedImageComponent key="1" src={image1} inCondition={true} />;
const SecondImage = <FadedImageComponent key="2" src={image2} inCondition={true} />;
const ThirdImage = <FadedImageComponent key="3" src={image3} inCondition={true} />;
const FourthImage = <FadedImageComponent key="4" src={image4} inCondition={true} />;

const ArrayImages: any[] = [FirstImage, SecondImage, ThirdImage, FourthImage];

export default function Animation() {
  const [displayed, setDisplayed] = useState(null);
  const matches = useMediaQuery('(min-width:800px)');
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayed(validTheLenght(displayed, ArrayImages));
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [displayed]);

  const FadedImage = ({ displayed }: { displayed: number | any }) => {
    return (
      <Box
        sx={{ position: 'relative', height: '100vh', boxSizing: 'content-box', overflow: 'hidden' }}
      >
        <Slide direction="up" in={displayed === 1} timeout={500} mountOnEnter unmountOnExit>
          <img src={image1} width="100%" height="100%" />
        </Slide>
        <Slide direction="up" in={displayed === 2} timeout={500} mountOnEnter unmountOnExit>
          <img src={image2} width="100%" height="100%" />
        </Slide>
        <Slide direction="up" in={displayed === 3} timeout={500} mountOnEnter unmountOnExit>
          <img src={image3} width="100%" height="100%" />
        </Slide>
        <Slide direction="up" in={displayed === 4} timeout={500} mountOnEnter unmountOnExit>
          <img src={image4} width="100%" height="100%" />
        </Slide>
        <Box sx={{ position: 'absolute', bottom: '10px', px: '20px' }}></Box>
        <Box sx={{ position: 'absolute', bottom: '20px', px: '20px' }}>
          <Fade in={!!displayed} timeout={1000} mountOnEnter unmountOnExit>
            <img src={textoImagen} width="100%" height="100%" />
          </Fade>
          <Box display="flex" width="100%" justifyContent="space-between">
            <Box width="24%">
              <LinearProgressCustom time={displayed == 1 ? 4 : 0} empty={displayed < 1} />
            </Box>
            <Box width="24%">
              <LinearProgressCustom time={displayed == 2 ? 4 : 0} empty={displayed < 2} />
            </Box>
            <Box width="24%">
              <LinearProgressCustom time={displayed == 3 ? 4 : 0} empty={displayed < 3} />
            </Box>
            <Box width="24%">
              <LinearProgressCustom time={displayed == 4 ? 4 : 0} empty={displayed < 4} />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  const TextImage = ({ displayed }: { displayed: number | any }) => {
    return (
      <>
        <Fade in={displayed === 1} timeout={500} mountOnEnter unmountOnExit>
          <img src={mach1} width="100%" height="100%" />
        </Fade>
        <Fade in={displayed === 2} timeout={500} mountOnEnter unmountOnExit>
          <img src={alcancia2} width="100%" height="100%" />
        </Fade>
        <Fade in={displayed === 3} timeout={500} mountOnEnter unmountOnExit>
          <img src={mach3} width="100%" height="100%" />
        </Fade>
        <Fade in={displayed === 4} timeout={500} mountOnEnter unmountOnExit>
          <img src={alcancia4} width="100%" height="100%" />
        </Fade>
        <Fade in={true} timeout={regularFadeTime}>
          <Box pt={'18px'}>
            <Button
              variant="outlined"
              color="day"
              sx={{
                borderRadius: '120px',
                borderWidth: '1px',
                fontWeight: 'bold',
                float: 'right',
                fontSize: '12px',
                height: '35px',
                minWidth: '120px',
              }}
              href="#"
            >
              Ver más
            </Button>
          </Box>
        </Fade>
      </>
    );
  };
  return (
    <>
      <Fade in={!displayed} timeout={2000} mountOnEnter unmountOnExit exit={false}>
        <img src={ChristmasImage} width="100%" height="100%" />
      </Fade>
      <Box sx={{ display: !displayed ? 'none' : 'flex' }}>
        <Box sx={{ width: '55.4%', display: matches ? 'block' : 'none' }}>
          <Box px={'44px'} pb={'80px'} pt={'28px'}>
            <Image src={Logo}></Image>
          </Box>
          <Box px="80px">
            <TextImage displayed={displayed} />
          </Box>
        </Box>
        <Box
          sx={{ width: matches ? '45%' : '100%' }}
          onClick={() => {
            setDisplayed(validTheLenght(displayed, ArrayImages));
          }}
        >
          <FadedImage displayed={displayed} />
        </Box>
      </Box>
    </>
  );
}
