import { LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';

export default function LinearProgressCustom({ time, empty }: { time: number; empty: boolean }) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    console.log(seconds);
    const intervalId = setInterval(() => {
      if (seconds <= time) setSeconds(seconds + 0.12);
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, [seconds]);
  return (
    <LinearProgress
      variant="determinate"
      color="inherit"
      value={empty ? 0 : (seconds / time) * 100}
      sx={{ color: 'gray' }}
    />
  );
}
