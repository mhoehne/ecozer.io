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
      <Container>
        <Box
          px={{ xs: 2, sm: 2 }}
          py={{ xs: 4, sm: 4 }}
          mx={{ xs: -3, sm: -3 }}
          my={{ xs: 4, sm: 4 }}
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
            So funktioniert es
          </Typography>
          <Timeline position="alternate">
            {/* 1nd Item */}
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <DriveFileRenameOutlineIcon
                    fontSize="large"
                    sx={{ color: 'background.paper' }}
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ pt: 2.25 }} variant="h6">
                {' '}
                In nur wenigen Schritten registrieren
                <Typography>
                  Die Registrierung dauert nur wenige Minuten
                </Typography>
              </TimelineContent>
            </TimelineItem>

            {/* 2nd Item */}
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <PostAddIcon
                    fontSize="large"
                    sx={{ color: 'background.paper' }}
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ pt: 2.25 }} variant="h6">
                {' '}
                Produkt erstellen und Details hinzufügen!
                <Typography>Füge Bilder und Texte hinzu</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <RocketLaunchIcon
                    fontSize="large"
                    sx={{ color: 'background.paper' }}
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ pt: 2.25 }} variant="h6">
                {' '}
                Veröffentlichen!
                <Typography>
                  Unser Team validiert in kürzester Zeit dein Produkt
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <CheckCircleOutlineIcon
                    fontSize="large"
                    sx={{ color: 'background.paper' }}
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ pt: 2.25 }} variant="h6">
                {' '}
                Fertig!
                <Typography>Text</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Container>
    </>
  );
}
