import { Episode, PodcastDetail } from '../../models';

export const FETCH_DETAIL_BEGIN = 'FETCH_DETAIL_BEGIN';
export const FETCH_DETAIL_SUCCESS = 'FETCH_DETAIL_SUCCESS';
export const FETCH_DETAIL_FAILURE = 'FETCH_DETAIL_FAILURE';
export const FETCH_EPISODE_BEGIN = 'FETCH_EPISODE_BEGIN';
export const FETCH_EPISODE_SUCCESS = 'FETCH_EPISODE_SUCCESS';
export const FETCH_EPISODE_FAILURE = 'FETCH_EPISODE_FAILURE';

interface FetchDetailBeginAction {
  type: typeof FETCH_DETAIL_BEGIN;
}

interface FetchDetailSuccessAction {
  type: typeof FETCH_DETAIL_SUCCESS;
  payload: PodcastDetail;
}

interface FetchDetailFailureAction {
  type: typeof FETCH_DETAIL_FAILURE;
  payload: string;
}

interface FetchEpisodeBeginAction {
  type: typeof FETCH_EPISODE_BEGIN;
}

interface FetchEpisodeSuccessAction {
  type: typeof FETCH_EPISODE_SUCCESS;
  payload: Episode;
}

interface FetchEpisodeFailureAction {
  type: typeof FETCH_EPISODE_FAILURE;
  payload: string;
}

export type EpisodeActionTypes =
  | FetchDetailBeginAction
  | FetchDetailSuccessAction
  | FetchDetailFailureAction
  | FetchEpisodeBeginAction
  | FetchEpisodeSuccessAction
  | FetchEpisodeFailureAction;

export type EpisodeState = {
  podCastDetail: PodcastDetail | null;
  episode: Episode | null;
  loadingDetail: boolean;
  loadingEpisode: boolean;
  error: string | null;
};

export const initialState: EpisodeState = {
  podCastDetail: null,
  episode: null,
  loadingDetail: false,
  loadingEpisode: false,
  error: null,
};
