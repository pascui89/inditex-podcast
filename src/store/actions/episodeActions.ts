import { Dispatch } from 'redux';
import {
  fetchDetailBegin,
  fetchDetailFailure,
  fetchDetailSuccess,
} from '../reducers/episodeReducer';
import { Episode } from '../../models';
import { fetchEpisode } from '../../services/itunesService';

export const fetchEpisodeAction = async (
  episodeId: number,
  limit: number = 100
) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDetailBegin());

    try {
      const episode: Episode = await fetchEpisode(episodeId, limit);
      dispatch(fetchDetailSuccess(episode));
    } catch (error: any) {
      dispatch(fetchDetailFailure(error.message));
    }
  };
};
