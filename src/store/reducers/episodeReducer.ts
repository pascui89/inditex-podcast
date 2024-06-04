import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../types/episodeTypes';

const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {
    fetchDetailBegin: (state) => {
      state.loadingDetail = true;
      state.error = null;
    },
    fetchDetailSuccess: (state, action) => {
      state.podCastDetail = action.payload;
      state.loadingDetail = false;
      state.error = null;
    },
    fetchDetailFailure: (state, action) => {
      state.podCastDetail = null;
      state.loadingDetail = false;
      state.error = action.payload;
    },
    fetchEpisodeBegin: (state) => {
      state.loadingEpisode = true;
      state.error = null;
    },
    fetchEpisodeSuccess: (state, action) => {
      state.episode = action.payload;
      state.loadingEpisode = false;
      state.error = null;
    },
    fetchEpisodeFailure: (state, action) => {
      state.episode = null;
      state.loadingEpisode = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDetailBegin,
  fetchDetailSuccess,
  fetchDetailFailure,
  fetchEpisodeBegin,
  fetchEpisodeSuccess,
  fetchEpisodeFailure,
} = episodeSlice.actions;
export default episodeSlice;
