import {
  CircularProgress,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/types/RootState';
import { StyledAvatar, StyledTypography } from './styled';

/**
 * ResponsiveAppBar Component
 *
 * Displays a responsive app bar with a logo, title, and loading spinner.
 */
export default function ResponsiveAppBar() {
  const navigate = useNavigate();
  const loading = useSelector(
    (state: RootState) => state.podcastReducer.loading
  );
  const loadingDetail = useSelector(
    (state: RootState) => state.episodeReducer.loading
  );
  const loadingEpisode = useSelector(
    (state: RootState) => state.episodeReducer.loadingEpisode
  );

  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setShowSpinner(loading || loadingDetail || loadingEpisode);
  }, [loading, loadingDetail, loadingEpisode]);

  const handleGoHomeRedirect = () => {
    return navigate('/');
  };

  return (
    <AppBar
      color="default"
      position="fixed"
      className="shadow-lg"
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          className="flex justify-between"
        >
          <div  className='flex items-center'>
            <Tooltip title="Go Home">
              <IconButton onClick={handleGoHomeRedirect}>
                <StyledAvatar
                  alt="Inditex PodCast"
                  src="logo.jpg"
                />
              </IconButton>
            </Tooltip>
            <StyledTypography
              variant="h6"
              noWrap
              onClick={handleGoHomeRedirect}
            >
              Podcaster
            </StyledTypography>
          </div>
          {showSpinner && <CircularProgress />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
