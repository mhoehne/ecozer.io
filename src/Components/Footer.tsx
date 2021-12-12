import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';


export default function Footer() {
  return <footer>
    <Box 
      px={{ xs: 2, sm: 4}}
      py={{ xs: 2, sm: 4}}
      bgcolor="text.secondary" 
      color="background.paper">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Box >Logo here</Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>Beliebte Seiten</Box>
            <Box>
              <Link href="#" underline="none">
                Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
              Link here
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>Portale</Box>
            <Box>
              <Link href="#" underline="none">
                Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
              Link here
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>Service</Box>
            <Box>
              <Link href="#" underline="none">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
              Link here
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
              Link here
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box>
            HTW Berlin
            
              <Link href="#" underline="none">
              Link here
              </Link>
              <Link href="#" underline="none">
              Link here
              </Link>
              <Link href="#" underline="none">
              Link here
              </Link>
              </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </footer>
}
