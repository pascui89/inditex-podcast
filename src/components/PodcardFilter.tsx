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
  const filteredItems = useSelector((state: RootState) => state.podcastReducer.filteredItems);
  const loading = useSelector((state: RootState) => state.podcastReducer.loading);
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
    <Grid container sx={{ justifyContent: 'flex-end' }}>
      <Grid item xs={8} md={4} sx={{ textAlign: 'right' }}>
        <Badge
          badgeContent={filteredItems.length}
          color="info"
          sx={{ marginTop: 3 }}
        />
        <TextField
          id="filterText"
          sx={{ marginLeft: 4 }}
          label="Filter podcasts..."
          variant="outlined"
          value={text}
          onChange={handleFilterChange}
        />
      </Grid>
    </Grid>
  );
}
