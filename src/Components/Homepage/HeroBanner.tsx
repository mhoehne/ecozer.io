import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import HeroBlobSVG from '../../images/blob-scene-haikei.svg';

export default function HeroBanner() {
  return (
    <>
      {/* Hero unit */}
      <Box
      height="92vh"
      paddingY="14vh"
        sx={{
          bgcolor: 'background.paper',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${HeroBlobSVG})`,
        }}
      >
        <Container>
          <Typography
            variant="h1"
            align="center"
            color="text.primary"
            fontWeight="600"
            fontSize="9.5rem"
            sx={{mb:2}}
          >
            ecozer
          </Typography>
          <Typography
            variant="h3"
            align="center"
            width="fit-content"
            color="text.primary"
            fontWeight="600"
            fontSize="4rem"
          >
            Software-Plattform für betriebliche Umweltinformationssysteme!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              size="large"
              variant="contained"
              color="secondary"
              href="/search"
              sx={{ color: 'background.paper' }}
            >
              Jetzt passendes Produkt finden
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
