import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Episode, PodcastDetail } from '../models';

import { Card, CardContent, Skeleton, Typography } from '@mui/material';

interface IProp {
  loading: boolean;
  podCastDetail: PodcastDetail | null;
}

/**
 * PodcardEpisodeMedia Component
 *
 * Displays the media content of a podcast episode.
 *
 * @param {boolean} props.loading - Indicates if the episode data is loading.
 * @param {PodcastDetail | null} props.podCastDetail - The podcast detail data.
 */
export default function PodcardEpisodeMedia(props: IProp) {
  const { episodeId } = useParams();
  const { podCastDetail, loading } = props;
  const [episode, setEpisode] = useState<Episode | undefined>();

  useEffect(() => {
    setEpisode(
      podCastDetail?.results.find(
        (episode: Episode) => episode.trackId.toString() === episodeId
      )
    );
  }, []);

  return (
    <Card className="max-w-full">
      <CardContent className="text-left">
        <CardContent className="m-0 p-0">
          {loading ? (
            <Skeleton
              id="skeletonLoader"
              animation="wave"
              variant="rounded"
              width="100%"
              height={32}
              className="mb-2"
            />
          ) : (
            <Typography variant="h6" gutterBottom>
              {episode?.trackName}
            </Typography>
          )}
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rounded"
              width="100%"
              height={215}
              className="mb-2"
            />
          ) : (
            <p
              data-testid="episodeDescription"
              dangerouslySetInnerHTML={{ __html: episode?.description || '' }}
            />
          )}
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rounded"
              width="100%"
              height={54}
            />
          ) : (
            <audio
              data-testid="episodeUrl"
              className="w-full"
              src={episode?.episodeUrl}
              controls={true}
              autoPlay={false}
              loop={false}
            />
          )}
        </CardContent>
      </CardContent>
    </Card>
  );
}
