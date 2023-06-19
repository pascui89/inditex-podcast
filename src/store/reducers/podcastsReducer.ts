import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../types/podcastTypes';
import { PodcastEntry } from '../../models';

const podcastSlice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filteredItems = state.items.filter(
        (item: PodcastEntry) =>
          item['im:name']?.label
            .toLowerCase()
            .includes(action.payload?.toLowerCase()) ||
          item['im:artist']?.label
            .toLowerCase()
            .includes(action.payload?.toLowerCase())
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
      state.filteredItems = result;
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
