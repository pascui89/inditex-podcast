import { EpisodeState } from './episodeTypes';
import { PodcastState } from './podcastTypes';

export type RootState = {
  podcastReducer: PodcastState;
  episodeReducer: EpisodeState;
};
