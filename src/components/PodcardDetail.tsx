import { PodcastEntry } from '../models';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from '@mui/material';

interface IProp {
  podCast: PodcastEntry | undefined;
}

const StyledMainCardContent = styled(CardContent)`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledCardContent = styled(CardContent)`
  max-width: 100%;
  border-top: 0.1em solid rgba(0, 0, 0, 0.14);
  padding: 0.5em;
  margin-top: 4px;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 150px;
  width: 150px;
`;

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
    <Card id="podcardDetail" className="max-w-full">
      {podCast && (
        <StyledMainCardContent>
          <StyledCardMedia
            sx={{ height: 150, width: 150 }}
            image={podCast?.['im:image']?.[2]?.label}
          />
          <StyledCardContent>
            <div className="text-left mb-4">
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
                <p
                  dangerouslySetInnerHTML={{
                    __html: podCast?.summary.label || '',
                  }}
                />
              </Typography>
            </div>
          </StyledCardContent>
        </StyledMainCardContent>
      )}
    </Card>
  );
}
