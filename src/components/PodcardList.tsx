import { Grid } from '@mui/material';
import { PodcastEntry } from '../models';
import Podcard from './Podcard';

type Props = {
  items: PodcastEntry[];
};

/**
 * Component for displaying a list of podcast cards.
 *
 * @param {PodcastEntry[]} items - List of podcast entries.
 */
export function PodcardList(props: Props) {
  return (
    <Grid container spacing={2}>
      {props.items?.map((item, index) => {
        return (
          <Grid item xs={6} md={3} key={index}>
            <Podcard key={`p-${index}`} item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}
