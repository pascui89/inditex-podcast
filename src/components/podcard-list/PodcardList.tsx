import { Grid } from '@mui/material';
import { PodcastEntry } from '../../models';
import Podcard from '../podcard/Podcard';

type Props = {
  items: PodcastEntry[];
  loading: boolean;
};

/**
 * Component for displaying a list of podcast cards.
 *
 * @param {PodcastEntry[]} items - List of podcast entries.
 */
export function PodcardList({ loading, items }: Props) {
  const renderLoadingData = () => {
    return Array.from({ length: 20 }, (_, index) => (
      <Grid item xs={6} md={3} key={index}>
        <Podcard key={`p-${index}`} item={null} loading={true} />
      </Grid>
    ));
  };

  return (
    <Grid container spacing={2}>
      {loading && renderLoadingData()}
      {!loading &&
        items?.map((item, index) => {
          return (
            <Grid item xs={6} md={3} key={index}>
              <Podcard key={`p-${index}`} item={item} />
            </Grid>
          );
        })}
    </Grid>
  );
}
