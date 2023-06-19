import { combineReducers } from 'redux';
import podcastSlice from './podcastsReducer';
import episodeSlice from './episodeReducer';

export default combineReducers({
  podcastReducer: podcastSlice.reducer,
  episodeReducer: episodeSlice.reducer,
});
