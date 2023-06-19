import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../types/PodcastReducerState';
import { PodcastEntry } from '../types';

const podcastSlice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const localeData = localStorage.getItem('podcastItems');
      const items = localeData
        ? JSON.parse(localeData)?.feed.entry
        : state.items;
      state.filteredItems = items.filter(
        (item: PodcastEntry) =>
          item['im:name']?.label
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          item['im:artist']?.label
            .toLowerCase()
            .includes(action.payload.toLowerCase())
      );
      state.loading = false;
      state.error = null;
    },
    fetchPodcastsBegin: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPodcastsSuccess: (state, action) => {
      const result = Array.isArray(action.payload.feed.entry)
        ? action.payload.feed.entry
        : [action.payload.feed.entry];
      state.loading = false;
      state.items = result;
      state.itemSize = result.length;
    },
    fetchPodcastsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setFilter,
  fetchPodcastsBegin,
  fetchPodcastsSuccess,
  fetchPodcastsFailure,
} = podcastSlice.actions;
export default podcastSlice;
