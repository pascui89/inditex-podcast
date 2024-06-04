import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchPodcastsAction } from '../../store/actions/podcastActions';
import { useAppDispatch } from '../../interfaces/hooks/useAppDispatch';

const useMainView = () => {
    const dispatch = useAppDispatch();
    const filteredItems = useSelector(
      (state: RootState) => state.podcastReducer.filteredItems
    );
    const loading = useSelector(
      (state: RootState) => state.podcastReducer.loading
    );
  
    const items = useMemo(() => filteredItems, [filteredItems]);
  
    useEffect(() => {
      dispatch(fetchPodcastsAction());
    }, []);

    return {
        state: {
            loading,
            items
        }
    }
}

export default useMainView;