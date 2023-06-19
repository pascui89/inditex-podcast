import { Episode, PodcastDetail } from '.';

export type EpisodeReducerState = {
  podCastDetail: PodcastDetail | null;
  episode: Episode | null;
  loading: boolean;
  loadingEpisode: boolean;
  error: string | null;
};

export const initialState: EpisodeReducerState = {
  podCastDetail: null,
  episode: null,
  loading: false,
  loadingEpisode: false,
  error: null,
};
