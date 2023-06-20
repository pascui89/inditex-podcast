import { PodcastEntry } from '../models';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface IProp {
  podCast: PodcastEntry | undefined;
}

/**
 * PodCardDetail Component
 *
 * Displays detailed information about a podcast.
 *
 * @param {PodcastEntry | undefined} props.podCast - The podcast data.
 */
export default function PodcardDetail(props: IProp) {
  const { podCast } = props;

  return (
    <Card id="podcardDetail">
      {podCast && (
        <CardContent
          sx={{
            maxWidth: '20vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <CardMedia
            sx={{ height: 150, width: 150 }}
            image={podCast?.['im:image']?.[2]?.label}
          />
          <CardContent
            sx={{
              maxWidth: '100%',
              borderTop: '0.1em solid rgba(0,0,0,0.14)',
              padding: '0.5em',
              marginTop: 4,
            }}
          >
            <div style={{ textAlign: 'left', marginBottom: 4 }}>
              <Typography variant="h6" gutterBottom>
                {podCast?.['im:name'].label}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {podCast?.['im:artist'].label}
              </Typography>
            </div>
            <div
              style={{
                textAlign: 'initial',
                borderTop: '0.1em solid rgba(0,0,0,0.14)',
              }}
            >
              <Typography mt={2} variant="subtitle2" gutterBottom>
                Description:
              </Typography>
              <Typography variant="subtitle1">
                {podCast?.summary.label}
              </Typography>
            </div>
          </CardContent>
        </CardContent>
      )}
    </Card>
  );
}
