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
    <Card id="podcardEpisodes">
      <CardContent sx={{ textAlign: 'left' }}>
        <CardContent style={{ margin: 0, padding: 0 }}>
            {loading ? <Skeleton animation="wave" variant="rounded" width="100%" height={32} sx={{ marginBottom: 2 }} /> : (
              <Typography variant="h6" gutterBottom>
                {episode?.trackName}
              </Typography>
            )}
            {loading ? <Skeleton animation="wave" variant="rounded" width="100%" height={215} sx={{ marginBottom: 2 }} /> : (
              <p
                dangerouslySetInnerHTML={{ __html: episode?.description || '' }}
              />
            )}
            {loading ? <Skeleton animation="wave" variant="rounded" width="100%" height={54} /> : (
              <audio
                style={{ width: '100%' }}
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
