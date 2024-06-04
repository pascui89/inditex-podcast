import { Badge, Grid, TextField } from '@mui/material';
import usePodcardFilter from './usePodcardFilter';

/**
 * Component for filtering podcasts.
 */
export default function PodcardFilter() {
  const { 
    state: {
      loading,
      filteredItems,
      text
    },
    actions: {
      handleFilterChange
    }
  } = usePodcardFilter();
  return (
    <Grid container className='justify-end'>
      <Grid item xs={8} md={4} className='text-right items-center'>
        <Badge
          data-testid="badgeData"
          badgeContent={filteredItems?.length}
          color="info"
          className="mt-7 mr-7"
        />
        <TextField
          id="filterText"
          data-testid="filterText"
          label="Filter podcasts..."
          variant="outlined"
          value={text}
          disabled={loading}
          onChange={handleFilterChange}
        />
      </Grid>
    </Grid>
  );
}
