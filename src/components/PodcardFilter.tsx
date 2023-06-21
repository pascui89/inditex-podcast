import { Badge, Grid, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../store';
import { setFilter } from '../store/reducers/podcastsReducer';
import { useAppDispatch } from '../interfaces/hooks/useAppDispatch';
import { useDebounce } from '../interfaces/hooks';

/**
 * Component for filtering podcasts.
 */
export default function PodcardFilter() {
  const dispatch = useAppDispatch();
  const filteredItems = useSelector(
    (state: RootState) => state.podcastReducer.filteredItems
  );
  const loading = useSelector(
    (state: RootState) => state.podcastReducer.loading
  );
  const [text, setText] = useState('');

  const [debouncedFilter] = useDebounce((filter: string) => {
    console.log(filter);
    dispatch(setFilter(filter));
  }, 500);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let val = event.target.value;
    setText(val);
    if (!loading) {
      debouncedFilter(val);
    }
  };

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
