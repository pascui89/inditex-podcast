import {
  Avatar,
  CircularProgress,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/types/RootState';

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
      sx={{ boxShadow: '0px 2px 0px 0px rgba(0,0,0,0.14)' }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Go Home">
              <IconButton onClick={handleGoHomeRedirect}>
                <Avatar
                  alt="Inditex PodCast"
                  src="logo.jpg"
                  sx={{
                    width: 90,
                    height: 90,
                    display: { sx: 'none', md: 'flex' },
                  }}
                />
              </IconButton>
            </Tooltip>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={handleGoHomeRedirect}
              sx={{
                ml: 2,
                display: { md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Podcaster
            </Typography>
          </div>
          {showSpinner && <CircularProgress />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
