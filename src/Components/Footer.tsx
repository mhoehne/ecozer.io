import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import LogoFooter from '../images/S20_HTW_Berlin_Logo_neg_WEISS_RGB.png';
import Typography from '@mui/material/Typography';


export default function Footer() {
  return <footer>
    <Box 
      px={{ xs: 2, sm: 4}}
      py={{ xs: 2, sm: 4}}
      mt={{ xs: 2, sm: 4}}
      bgcolor="text.secondary" 
      color="background.paper"
      /* position="fixed"
      bottom="0"
      left="0"
      width="100%"*/
      >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <CardMedia
            component="img"
            sx={{ height: '90px',
                  width: '150px',
          }}
            alt="htw logo negwhite"
            image={LogoFooter}
          />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>
              <Typography variant="h6">Beliebte Seiten</Typography>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
                Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
              Link here
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>
              <Typography variant="h6">Portale</Typography>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
                Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
              Link here
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>
              <Typography variant="h6">Service</Typography>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none" color="inherit">
              Link here
              </Link>
            </Box>
          </Grid>

          

        </Grid>
      </Container>

      <Container >
        <Grid container spacing={2} >
          <Grid item xs={12} sm={12} height='2rem' borderBottom='solid 1px'/>
            <Grid item xs={2} sm={2}>
              HTW Berlin
            </Grid>
          <Grid item xs={2} sm={2} sx={{mx:1}}>
              <Link href="#" underline="none" color="inherit" sx={{px: 4}}>
                Impressum
              </Link> -
          </Grid>
          <Grid item xs={2} sm={2}>
              <Link href="#" underline="none" color="inherit">
                Datenschutzerklärung
              </Link>
          </Grid>
        </Grid>
      </Container>

    </Box>
  </footer>
}
