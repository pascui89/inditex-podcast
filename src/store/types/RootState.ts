import { EpisodeReducerState } from './EpisodeReducerState';
import { PodcastReducerState } from './PodcastReducerState';

export type RootState = {
  podcastReducer: PodcastReducerState;
  episodeReducer: EpisodeReducerState;
};
