import { Card, CardContent, Skeleton, Typography } from '@mui/material';
import { PodcastDetail } from '../models';

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
export default function PodcardEpisodesCounter(props: IProp) {
  const { podCastDetail, loading } = props;
  return (
    <Card id="podcardEpisodes">
      <CardContent className="text-left">
        <CardContent className="p-0">
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
        </CardContent>
      </CardContent>
    </Card>
  );
}
