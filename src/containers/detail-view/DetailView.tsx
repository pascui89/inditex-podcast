import { Container, Grid } from '@mui/material';
import TransitionAlerts from '../../components/transition-alerts/TransitionAlerts';
import PodcardDetail from '../../components/podcard-detail/PodcardDetail';
import PodcardEpisodesCounter from '../../components/podcard-episodes-counter/PodcardEpisodesCounter';
import PodcartEpisodes from '../../components/podcart-episodes/PodcartEpisodes';
import useDetailView from './useDetailView';

/**
 * Component for displaying the detail view of a podcast.
 */
export const DetailView = () => {
  const {
    state: {
      error,
      podCast,
      podCastDetail,
      loading,
      showTimerAlert
    }
  } = useDetailView();
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

const AlertComponent: React.FC<AlertComponentProps> = ({
  showTimerAlert,
  loading,
  error,
}) => {
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
