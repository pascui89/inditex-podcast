import { useEffect, useMemo } from 'react';
import { Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { fetchPodcastsAction } from '../store/actions/podcastActions';
import PodcardFilter from '../components/PodcardFilter';
import { PodcardList } from '../components/PodcardList';
import { RootState } from '../store';
import { useAppDispatch } from '../interfaces/hooks/useAppDispatch';

/**
 * Component for displaying the main view of the application.
 * It fetches and displays a list of podcasts, with the ability to filter the list.
 */
export function MainView() {
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

  return (
    <Container maxWidth="xl">
      <Grid container mt={12} spacing={2}>
        <Grid item xs={12} className="justify-end">
          <PodcardFilter />
        </Grid>
        <Grid item xs={12}>
          <PodcardList loading={loading} items={items} />
        </Grid>
      </Grid>
    </Container>
  );
}
