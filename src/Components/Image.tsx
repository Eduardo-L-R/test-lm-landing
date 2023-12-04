import { Box } from '@mui/material';

export default function Image({ src }: { src: string }) {
  return (
    <Box sx={{ width: '100%' }}>
      <img src={src} width="100%" />
    </Box>
  );
}
