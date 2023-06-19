import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import { RootState } from '../store';
import { usePodcast } from '../interfaces/hooks';
import PodcardDetail from '../components/PodcardDetail';
import PodcardEpisodeMedia from '../components/PodcardEpisodeMedia';
import { useAppDispatch } from '../interfaces/hooks/useAppDispatch';
import { fetchDetailAction } from '../store/actions/podcastActions';

/**
 * EpisodeView component.
 * Retrieves the necessary data from the Redux store and renders the episode details and media.
 */
export function EpisodeView() {
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

  const { podCast } = usePodcast(podcastId, filteredItems);

  // Fetch the episode details when the component mounts
  useEffect(() => {
    if (podCast) {
      dispatch(fetchDetailAction(podCast.id.attributes['im:id']));
    }
  }, [podCast]);

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
