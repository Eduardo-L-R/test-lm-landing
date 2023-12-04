import Fade from '@mui/material/Fade';
import { regularFadeTime } from '../const/fadeTimes';
export default function FadedImage({ src, inCondition }: { src: string; inCondition: any }) {
  return (
    <Fade
      in={inCondition}
      timeout={regularFadeTime}
      addEndListener={() => {
        setTimeout(() => {}, 1000);
      }}
      mountOnEnter
      unmountOnExit
    >
      <img src={src} width="100%" height="100%" />
    </Fade>
  );
}
