import { RootState } from "../../store/types/RootState";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useResponsiveAppBar = () => {
    const navigate = useNavigate();
    const loading = useSelector(
        (state: RootState) => state.podcastReducer.loading
      );
    const loadingDetail = useSelector(
    (state: RootState) => state.episodeReducer.loadingDetail
    );
    const loadingEpisode = useSelector(
    (state: RootState) => state.episodeReducer.loadingEpisode
    );

    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        setShowSpinner(loading || loadingDetail || loadingEpisode);
    }, [loading, loadingDetail, loadingEpisode]);

    return {
        state: { showSpinner },
        actions: { 
            handleGoHomeRedirect: () => navigate('/') 
        }
    };
};

export default useResponsiveAppBar;