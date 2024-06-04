import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Episode, PodcastDetail } from '../../models';

export const usePodcardEpisodeMedia = (podCastDetail: PodcastDetail | null) => {
    const { episodeId } = useParams();
    const [episode, setEpisode] = useState<Episode | undefined>();

    useEffect(() => {
        setEpisode(
            podCastDetail?.results.find(
                (episode: Episode) => episode.trackId.toString() === episodeId
            )
        );
    }, []);

    return {
        state: {
            episode
        },
        actions: {}
    }
}

export default usePodcardEpisodeMedia;