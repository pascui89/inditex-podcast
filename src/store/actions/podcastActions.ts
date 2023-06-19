import { Dispatch } from 'redux';
import { Podcast, PodcastDetail } from '../../models';
import { fetchDetail, fetchPodcasts } from '../../services/itunesService';
import { fetchPodcastsBegin, fetchPodcastsFailure, fetchPodcastsSuccess } from '../reducers/podcastsReducer';
import { fetchDetailBegin, fetchDetailFailure, fetchDetailSuccess } from '../reducers/episodeReducer';

export const fetchDetailAction = (id: string, limit: number = 100) =>  {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDetailBegin());
    
    try {
        const details: PodcastDetail = await fetchDetail(id, limit);
        dispatch(fetchDetailSuccess(details));
     
    } catch (error: any) {
      dispatch(fetchDetailFailure(error.message));
    }
  }
};

export const fetchPodcastsAction = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPodcastsBegin());

    try {
      const storedItems = localStorage.getItem('podcastItems');
      if (storedItems) {
        dispatch(fetchPodcastsSuccess(JSON.parse(storedItems) as Podcast));
        return;
      }
      const podcasts: Podcast = await fetchPodcasts();
      dispatch(fetchPodcastsSuccess(podcasts));
    } catch (error: any) {
      dispatch(fetchPodcastsFailure(error.message));
    }
  };
};
