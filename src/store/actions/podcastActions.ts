import { Dispatch } from 'redux';
import { Podcast, PodcastDetail } from '../../models';
import { fetchDetail, fetchPodcasts } from '../../services/itunesService';
import {
  fetchPodcastsBegin,
  fetchPodcastsFailure,
  fetchPodcastsSuccess,
} from '../reducers/podcastsReducer';
import {
  fetchDetailBegin,
  fetchDetailFailure,
  fetchDetailSuccess,
} from '../reducers/episodeReducer';
import { getLocalStorageData, setLocalStorageData } from '../../utils';

/**
 * Action that fetches podcast details by ID.
 * @param id - The ID of the podcast.
 * @param limit - The limit of episodes to fetch (default: 100).
 */
export const fetchDetailAction = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDetailBegin());

    try {
      const details: PodcastDetail = await fetchDetail(id);
      dispatch(fetchDetailSuccess(details));
    } catch (error: any) {
      dispatch(fetchDetailFailure(error.message));
    }
  };
};

/**
 * Action that fetches podcasts.
 */
export const fetchPodcastsAction = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPodcastsBegin());

    try {
      const now = new Date().getTime();
      const storedData = getLocalStorageData();
      if (storedData && now < storedData.expiry) {
        dispatch(fetchPodcastsSuccess(storedData.value));
        return;
      }
      const podcasts: Podcast = await fetchPodcasts();
      setLocalStorageData(podcasts);
      dispatch(fetchPodcastsSuccess(podcasts));
    } catch (error: any) {
      dispatch(fetchPodcastsFailure(error.message));
    }
  };
};
