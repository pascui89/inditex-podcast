import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TransitionAlerts from '../components/TransitionAlerts';
import PodcardDetail from '../components/PodcardDetail';
import PodcardEpisodesCounter from '../components/PodcardEpisodesCounter';
import PodcartEpisodes from '../components/PodcartEpisodes';
import { usePodcast } from '../interfaces/hooks';
import { useAppDispatch } from '../interfaces/hooks/useAppDispatch';
import { fetchDetailAction } from '../store/actions/podcastActions';

/**
 * Component for displaying the detail view of a podcast.
 */
export const DetailView = () => {
  const { podcastId } = useParams();
  const dispatch = useAppDispatch();
  const filteredItems = useSelector((state: RootState) => state.podcastReducer.filteredItems);
  const podCastDetail = useSelector((state: RootState) => state.episodeReducer.podCastDetail);
  const loading = useSelector((state: RootState) => state.episodeReducer.loading);
  const error = useSelector((state: RootState) => state.episodeReducer.error);

  const { podCast } = usePodcast(podcastId, filteredItems);
  const [ showTimerAlert, setShowTimerAlert ] = useState(false);

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

  return (
    <Container maxWidth="xl">
      <Grid container mt={12} spacing={2}>
        <AlertComponent
          showTimerAlert={showTimerAlert}
          loading={loading}
          error={error}
        />
        <Grid item xs={12} md={3}>
          <PodcardDetail podCast={podCast} />
        </Grid>
        <Grid item xs={12} md={9}>
          {!error && (
            <Grid container direction="column">
              <Grid item xs={12} md={1}>
                <PodcardEpisodesCounter
                  loading={loading}
                  podCastDetail={podCastDetail}
                />
              </Grid>
              <Grid item mt={2} xs={12} md={11}>
                <PodcartEpisodes
                  loading={loading}
                  podCastDetail={podCastDetail}
                />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

interface AlertComponentProps {
  showTimerAlert: boolean;
  loading: boolean;
  error: string | null;
}

const AlertComponent: React.FC<AlertComponentProps> = ({ showTimerAlert, loading, error }) => {
  if (showTimerAlert && loading) {
    return (
      <Grid item xs={12} md={12}>
        <TransitionAlerts
          severity="info"
          text="It seems that the service is a little slow, we are processing your request."
        />
      </Grid>
    );
  }

  if (error) {
    return (
      <Grid item xs={12} md={12}>
        <TransitionAlerts
          severity="error"
          text="An error occurred during the request, please try again."
        />
      </Grid>
    );
  }

  return null;
};