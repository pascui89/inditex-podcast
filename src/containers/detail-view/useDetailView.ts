import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { usePodcast } from '../../interfaces/hooks';
import { useAppDispatch } from '../../interfaces/hooks/useAppDispatch';
import { fetchDetailAction } from '../../store/actions/podcastActions';

const useDetailView = () => {
    const { podcastId } = useParams();
    const dispatch = useAppDispatch();
    const filteredItems = useSelector(
        (state: RootState) => state.podcastReducer.filteredItems
    );
    const podCastDetail = useSelector(
        (state: RootState) => state.episodeReducer.podCastDetail
    );
    const loading = useSelector(
        (state: RootState) => state.episodeReducer.loading
    );
    const error = useSelector((state: RootState) => state.episodeReducer.error);

    const { podCast } = usePodcast(podcastId, filteredItems);
    const [showTimerAlert, setShowTimerAlert] = useState(false);

    useEffect(() => {
        let timerId: NodeJS.Timeout | null = null;
        const fetchPodcastDetail = () => {
        if (podCast) {
            dispatch(fetchDetailAction(podCast.id.attributes['im:id']));
            timerId = setTimeout(() => setShowTimerAlert(true), 3000);
        }
        };

        fetchPodcastDetail();

        return () => {
        if (timerId) {
            clearTimeout(timerId);
        }
        };
    }, [podCast]);
    return {
        state: {
            error,
            podCast,
            podCastDetail,
            loading,
            showTimerAlert
        }
    }
}

export default useDetailView;