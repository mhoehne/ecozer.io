import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function GlossarItem() {
  return (
    <>
      <Box
        mx={{ xs: 4, sm: 4 }}
        my={{ xs: 2, sm: 2 }}
        px={{ xs: 2, sm: 2 }}
        py={{ xs: 2, sm: 2 }}
        bgcolor="background.paper"
        color="text.primary"
      >
        <Typography variant="h6" gutterBottom component="div">
          h6. Heading
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis iusto quos iure omnis ex ullam? Et eius voluptas quia vel
          totam dicta, fuga blanditiis, eveniet, dolores assumenda repudiandae
          placeat! Culpa.
        </Typography>
      </Box>
    </>
  );
}
