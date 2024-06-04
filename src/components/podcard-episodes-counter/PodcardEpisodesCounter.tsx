import { Card, CardContent, Skeleton, Typography } from '@mui/material';
import { PodcastDetail } from '../../models';
import { StyledCardContentPaddingNone } from '../styled';

interface IProp {
  loading: boolean;
  podCastDetail: PodcastDetail | null;
}

/**
 * PodCardEpisodesCounter Component
 *
 * Displays the count of episodes for a podcast.
 *
 * @param {boolean} props.loading - Indicates if the episode data is loading.
 * @param {PodcastDetail | null} props.podCastDetail - The podcast detail data.
 */
export default function PodcardEpisodesCounter({ podCastDetail, loading }: IProp) {
  return (
    <Card id="podcardEpisodes">
      <CardContent className="text-left">
        <StyledCardContentPaddingNone>
          {loading && (
            <Skeleton
              data-testid="loading-skeleton"
              variant="rectangular"
              width="100%"
              height={60}
            />
          )}
          {!loading && (
            <Typography variant="h6" data-testid="episodeCounter">
              Episodes: {podCastDetail?.resultCount}
            </Typography>
          )}
        </StyledCardContentPaddingNone>
      </CardContent>
    </Card>
  );
}
