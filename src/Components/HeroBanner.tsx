import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SampleImage from '../images/sample-img.png';



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
            backgroundImage: `url(${SampleImage})`,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              BUIS
            </Typography>
            <Typography variant="h5" align="center" color="text.primary" paragraph>
              Plattform für betriebliche Umweltinformationssysteme!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href="/search">Jetzt Produkt finden</Button>
              <Button variant="outlined" href="/signup">Jetzt registrieren</Button>
            </Stack>
          </Container>
        </Box>
        </>
  );
}