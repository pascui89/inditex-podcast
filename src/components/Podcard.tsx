import { useId } from 'react';
import { useNavigate } from 'react-router-dom';

import { Avatar, Card, CardContent, Skeleton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { PodcastEntry } from '../models';

type Props = {
  item: PodcastEntry | null;
  loading?: boolean;
};

/**
 * Podcard Component.
 *
 * Displays a card representing a podcast item.
 *
 * @param {PodcastEntry} props.item - The podcast entry data.
 */
export default function Podcard(props: Props) {
  const id = useId();
  const { item } = props;
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { loading = false } = props;

  /**
   * Handle card click event.
   * Navigates to the podcast detail page.
   */
  const handleCardClick = () => {
    navigate(`/podcast/${props.item?.id.attributes['im:id']}`);
  };

  return (
    <Card
      key={id}
      sx={{
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow:
            '0px 2px 1px -1px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.18), 0px 1px 3px 0px rgba(0,0,0,0.20)',
        },
      }}
      onClick={handleCardClick}
    >
      <CardContent
        sx={{
          maxWidth: 345,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {loading ? (
          <Skeleton
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
          <Typography variant="h6" gutterBottom id="PodcastName">
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
