import { PodcastEntry } from '../models';
import {
  Card,
  Typography
} from '@mui/material';
import { StyledCardContent, StyledCardMedia, StyledMainCardContent } from './styled';

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
    <Card id="podcardDetail" className="max-w-full">
      {podCast && (
        <StyledMainCardContent data-testid="podcardDetail" >
          <StyledCardMedia image={podCast?.['im:image']?.[2]?.label}/>
          <StyledCardContent>
            <div className="text-left mb-4">
              <Typography variant="h6" gutterBottom>
                {podCast?.['im:name'].label}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {podCast?.['im:artist'].label}
              </Typography>
            </div>
            <div className="text-left border-t border-gray-300 pt-2">
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
