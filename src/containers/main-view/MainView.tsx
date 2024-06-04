import { Container, Grid } from '@mui/material';
import { PodcardList } from '../../components/podcard-list/PodcardList';
import PodcardFilter from '../../components/podcard-filter/PodcardFilter';
import useMainView from './useMainView';

/**
 * Component for displaying the main view of the application.
 * It fetches and displays a list of podcasts, with the ability to filter the list.
 */
export function MainView() {
  const { 
    state: { items, loading } 
  } = useMainView();
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
