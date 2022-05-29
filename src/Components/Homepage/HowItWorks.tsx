import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PostAddIcon from '@mui/icons-material/PostAdd';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Container } from '@mui/material';

// todos:

export default function HowItWorks() {
  return (
    <>
      <Box
        px={{ xs: 2, sm: 2 }}
        py={{ xs: 4, sm: 4 }}
        mx={{ xs: 0, sm: 0 }}
        my={{ xs: 0, sm: 0 }}
        bgcolor="background.paper"
        color="text.primary"
      >
        <Typography
          component="h4"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          So einfach funktioniert es!
        </Typography>
        <Timeline position="alternate">
          {/* 1nd Item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <DriveFileRenameOutlineIcon
                  fontSize="large"
                  sx={{ color: 'background.paper' }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ pt: 1, pb: 4, px: 2 }}>
              <Typography variant="h6" component="span">
                Schnelle Registrierung
              </Typography>
              <Typography>
                Erstelle in nur wenigen Schritten deinen Account
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* 2nd Item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <PostAddIcon
                  fontSize="large"
                  sx={{ color: 'background.paper' }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ pt: -1, pb: 4, px: 2 }}>
              <Typography variant="h6" component="span">
                Produkt erstellen
              </Typography>
              <Typography>Füge Bilder und die Produktdetails hinzu</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* 3rd Item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <RocketLaunchIcon
                  fontSize="large"
                  sx={{ color: 'background.paper' }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ pt: -1, pb: 4, px: 2 }}>
              <Typography variant="h6" component="span">
                Produkt veröffentlichen
              </Typography>
              <Typography>
                Unser Team validiert in kürzester Zeit dein Produkt
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* 4th Item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <CheckCircleOutlineIcon
                  fontSize="large"
                  sx={{ color: 'background.paper' }}
                />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ pt: -1, pb: 0, px: 2 }}>
              <Typography variant="h6" component="span">
                Fertig
              </Typography>
              <Typography>
                Dein Produkt ist nun für alle öffentlich sichtbar
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </>
  );
}
