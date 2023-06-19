import { Podcast, PodcastEntry } from '../../models';

export const FETCH_PODCASTS_BEGIN = 'FETCH_PODCASTS_BEGIN';
export const FETCH_PODCASTS_SUCCESS = 'FETCH_PODCASTS_SUCCESS';
export const FETCH_PODCASTS_FAILURE = 'FETCH_PODCASTS_FAILURE';
export const SET_FILTER = 'SET_FILTER';

export interface SetPodcastsFilterAction {
  type: typeof SET_FILTER;
  payload: string;
}

export interface FetchPodcastsBeginAction {
  type: typeof FETCH_PODCASTS_BEGIN;
}

export interface FetchPodcastsSuccessAction {
  type: typeof FETCH_PODCASTS_SUCCESS;
  payload: Podcast;
}

export interface FetchPodcastsFailureAction {
  type: typeof FETCH_PODCASTS_FAILURE;
  payload: string;
}

export type PodcastActionTypes =
  | SetPodcastsFilterAction
  | FetchPodcastsBeginAction
  | FetchPodcastsSuccessAction
  | FetchPodcastsFailureAction;

export type PodcastState = {
  items: PodcastEntry[];
  itemSize: number;
  filteredItems: PodcastEntry[];
  loading: boolean;
  error: null | string;
};

export const initialState: PodcastState = {
  items: [],
  itemSize: 0,
  filteredItems: [],
  loading: false,
  error: null,
};
