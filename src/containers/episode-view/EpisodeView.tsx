import { Container, Grid } from '@mui/material';
import PodcardDetail from '../../components/podcard-detail/PodcardDetail';
import PodcardEpisodeMedia from '../../components/podcard-episode-media/PodcardEpisodeMedia';
import useEpisodeView from './useEpisodeView';

/**
 * EpisodeView component.
 * Retrieves the necessary data from the Redux store and renders the episode details and media.
 */
export function EpisodeView() {
  const {
    state: {
      loading,
      podCast,
      podCastDetail
    }
  } = useEpisodeView();
  return (
    <Container maxWidth="xl">
      <Grid container mt={12} spacing={2}>
        <Grid item xs={12} md={3}>
          <PodcardDetail podCast={podCast} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <PodcardEpisodeMedia
                loading={loading}
                podCastDetail={podCastDetail}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
