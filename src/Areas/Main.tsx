import { Box, Button, Card, Typography, useMediaQuery } from '@mui/material';
import background from '../assets/Main/background.png';

import monoAmarillo from '../assets/Main/mono-amarillo.png';
import monoVerde from '../assets/Main/mono-verde.png';
import logo from '../assets/Main/logo.png';
import monoAzul from '../assets/Main/mono-azul.png';
import banco from '../assets/Main/red-icons/banco.png';
import bolsa from '../assets/Main/red-icons/bolsa.png';
import chancho from '../assets/Main/red-icons/chancho.png';
import dinero from '../assets/Main/red-icons/dinero.png';
import maleta from '../assets/Main/red-icons/maleta.png';
import notas from '../assets/Main/red-icons/notas.png';
import suma from '../assets/Main/red-icons/suma.png';
import tarjeta from '../assets/Main/red-icons/tarjeta.png';
import fotos from '../assets/Main/blue-icons/fotos.png';
import hablar from '../assets/Main/blue-icons/hablar.png';
import mano from '../assets/Main/blue-icons/mano.png';
import tarjetas from '../assets/Main/blue-icons/tarjetas.png';

export default function Main() {
  const matchmd = useMediaQuery('(min-width:820px)');
  const matchsm = useMediaQuery('(min-width:500px)');
  const Background = ({ children }: { children: any }) => {
    return (
      <Box
        sx={{
          display: 'flex',
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
        }}
      >
        {children}
      </Box>
    );
  };

  const GroupOfButtons = () => {
    return (
      <>
        <Box pb={matchmd ? '0px' : '10px'}>
          <CustomButton colorVariant="fire">¿Qué puedo hacer?</CustomButton>
        </Box>
        <Box pb={matchmd ? '0px' : '10px'}>
          <CustomButton colorVariant="aqua">Recomendaciones Vacaciones</CustomButton>
        </Box>
        <Box pb={matchmd ? '0px' : '10px'}>
          <CustomButton colorVariant="plant">Beneficios</CustomButton>
        </Box>
      </>
    );
  };

  const CustomButton = ({ children, colorVariant }: { children: any; colorVariant: any }) => {
    return (
      <Button
        variant="contained"
        color={colorVariant}
        sx={{
          borderRadius: '8px',
          borderWidth: '1px',
          fontWeight: '500',
          float: 'right',
          fontSize: matchsm ? '16px' : '10px',
          height: matchsm ? '60px' : '40px',
          minWidth: matchsm ? '160px' : '120px',
          maxWidth: matchsm ? '200px' : '100px',
          textAlign: 'center',
        }}
        href="#"
      >
        {children}
      </Button>
    );
  };

  const RedIcon = ({ srce, text }: { srce: any; text: string }) => {
    return (
      <Box
        sx={{
          width: matchmd ? '25%' : '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img src={srce} width={'40%'} />
        <Typography
          sx={{
            pt: '10px',
            pb: '20px',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {text}
        </Typography>
      </Box>
    );
  };

  const BlueIcon = ({ srce, text, detail }: { srce: any; text: string; detail: string }) => {
    return (
      <Box
        sx={{
          width: matchmd ? '22%' : '100%',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <img src={srce} width={matchmd ? '30%' : matchsm ? '12%' : '20%'} />
        <Box sx={{ color: 'white', pl: '4px' }}>
          <Typography sx={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'left' }}>
            {text}
          </Typography>
          <Typography sx={{ pb: '20px', fontSize: '8px', fontWeight: 'normal', textAlign: 'left' }}>
            {detail}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Background>
      <Box display="flex" flexDirection="column" width="100%" pb={'20px'}>
        <Box display="flex" justifyContent="center" width="100%">
          <Box width="16%" alignSelf="center">
            <img src={monoAmarillo} width="100%" />
          </Box>
          <Box width="40%">
            <img src={logo} width="100%" />
          </Box>
          <Box width="20%" alignSelf="center">
            <img src={monoVerde} width="100%" />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: matchmd ? 'row' : 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: matchmd ? '14%' : '0%',
            width: '100%',
          }}
        >
          <GroupOfButtons />
        </Box>
        <Box sx={{ display: 'flex', pt: '80px', px: '10%', flexWrap: 'wrap' }}>
          <Box width={matchmd ? '60%' : '100%'}>
            <Typography sx={{ fontSize: '1rem', fontWeight: '500' }}>
              <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#f2423a' }}>
                Descarga la App BCI Móvil
              </span>{' '}
              y vive
            </Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: '500' }}>
              la experiencia de llevar tu banco a todas partes.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                pt: '30px',
                pr: matchmd ? '20%' : '0%',
                pb: matchmd ? '0px' : '20px',
              }}
            >
              <RedIcon srce={chancho} text="Saldo" />
              <RedIcon srce={dinero} text="Transferencias" />
              <RedIcon srce={notas} text="Pagos" />
              <RedIcon srce={bolsa} text="Creditos" />
              <RedIcon srce={tarjeta} text="Tarjetas" />
              <RedIcon srce={maleta} text="Seguros" />
              <RedIcon srce={banco} text="Cajeros y sucursales" />
              <RedIcon srce={suma} text="Mas Servicios" />
            </Box>
          </Box>
          <Box width={matchmd ? '40%' : '100%'} alignSelf="center">
            <img src={monoAzul} width="100%" />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', pt: '30px', px: '10%', justifyContent: 'center' }}>
          <Card sx={{ backgroundColor: '#3faedc', borderRadius: '18px' }}>
            <Box width="100%">
              <Typography
                sx={{
                  px: '10%',
                  pt: '20px',
                  fontSize: matchmd ? '18px' : '13px',
                  fontWeight: '500',
                  display: 'flex',
                  color: '#fff',
                  textAlign: 'center',
                }}
              >
                iEstas vacaciones cuídate del Skimming o Clonación de Tarjetas!
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: matchmd ? 'row' : 'column',
                  flexWrap: 'wrap',
                  width: '100%',
                  pt: '30px',
                  px: '4%',
                  justifyContent: 'space-between',
                }}
              >
                <BlueIcon
                  srce={tarjetas}
                  text="Consejo 1:"
                  detail="Realiza directamente tus transacciones o mantén tutarjeta a la vista todo el tiempo."
                />
                <BlueIcon
                  srce={mano}
                  text="Consejo 2:"
                  detail="Cuando uses cajeros automáticos cubre con tu mano la contraseña."
                />
                <BlueIcon
                  srce={fotos}
                  text="Consejo 3:"
                  detail="Nunca permitas que fotografíen tus tarjetas."
                />
                <BlueIcon
                  srce={hablar}
                  text="Consejo 4:"
                  detail="No des nunca tu clave en voz alta."
                />
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Background>
  );
}
