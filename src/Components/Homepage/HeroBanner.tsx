import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HeroBlobSVG from '../images/blob-scene-haikei.svg';

export default function HeroBanner() {
  return (
    <>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 26,
          pb: 26,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${HeroBlobSVG})`,
        }}
      >
        <Container>
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="text.primary"
            font-weight="bold"
            gutterBottom
          >
            BUIS
          </Typography>
          <Typography
            variant="h3"
            align="center"
            width="fit-content"
            color="text.primary"
            paragraph
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
              href="/search"
              sx={{ color: 'background.paper' }}
            >
              Jetzt ihr passendes BUI Produkt finden!
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
