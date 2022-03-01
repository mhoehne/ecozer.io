import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SampleImage from '../images/sample-img.png';


export default function ImageBanner() {
  return (
      <>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 15,
            pb: 3,
            marginTop: 0,
            marginBottom: 5,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: {SampleImage},
          }}
        >
          <Container maxWidth={false}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Prop Seitenname!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              h5 Beschreibung, Seitendetails
            </Typography>
          </Container>
        </Box>
      </>
  );
}