import { PodcastEntry } from '.';

export type PodcastReducerState = {
  items: PodcastEntry[];
  itemSize: number;
  filteredItems: PodcastEntry[];
  loading: boolean;
  error: null | string;
};

export const initialState: PodcastReducerState = {
  items: [],
  itemSize: 0,
  filteredItems: [],
  loading: false,
  error: null,
};
