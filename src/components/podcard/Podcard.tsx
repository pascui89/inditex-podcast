import { useId } from 'react';
import { useNavigate } from 'react-router-dom';

import { Avatar, Card, CardContent, Skeleton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { PodcastEntry } from '../../models';

type Props = {
  item: PodcastEntry | null;
  loading?: boolean;
};

/**
 * Podcard Component.
 *
 * Displays a card representing a podcast item.
 *
 * @param {PodcastEntry} item - The podcast entry data.
 */
export default function Podcard( { item, loading }: Props) {
  const id = useId();
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  /**
   * Handle card click event.
   * Navigates to the podcast detail page.
   */
  const handleCardClick = () => {
    navigate(`/podcast/${item?.id.attributes['im:id']}`);
  };

  return (
    <Card key={id} onClick={handleCardClick} className="cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg">
      <CardContent className="max-w-[345px] flex justify-center items-center flex-col">
        {loading ? (
          <Skeleton
            data-testid="loading-data"
            animation="wave"
            variant="circular"
            width={matches ? 150 : 50}
            height={matches ? 150 : 50}
          />
        ) : (
          <Avatar
            sx={{ height: matches ? 150 : 50, width: matches ? 150 : 50 }}
            aria-label="recipe"
            src={(item && item['im:image'][2].label) || ''}
          />
        )}
        {loading ? (
          <Skeleton animation="wave" height={32} width="100%" />
        ) : (
          <Typography variant="h6" gutterBottom id="PodcastName" data-testid="podcastName">
            {item && item['im:name'].label}
          </Typography>
        )}
        {loading ? (
          <Skeleton animation="wave" height={28} width="100%" />
        ) : (
          <Typography variant="subtitle1" gutterBottom id="PodcastArtist">
            {item && item['im:artist'].label}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
