import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store';
import { usePodcast } from '../../interfaces/hooks';
import { useAppDispatch } from '../../interfaces/hooks/useAppDispatch';
import { fetchDetailAction } from '../../store/actions/podcastActions';

const useEpisodeView = () => {    
    const { podcastId } = useParams();
    const dispatch = useAppDispatch();
    const filteredItems = useSelector(
        (state: RootState) => state.podcastReducer.filteredItems
    );
    const podCastDetail = useSelector(
        (state: RootState) => state.episodeReducer.podCastDetail
    );
    const loading = useSelector(
        (state: RootState) => state.episodeReducer.loadingDetail
    );

    const { podCast } = usePodcast(podcastId, filteredItems);

    // Fetch the episode details when the component mounts
    useEffect(() => {
        if (podCast) {
        dispatch(fetchDetailAction(podCast.id.attributes['im:id']));
        }
    }, [podCast]);

    return {
        state: {
            loading,
            podCast,
            podCastDetail
        }
    }
}

export default useEpisodeView;