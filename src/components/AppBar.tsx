import {
  Avatar,
  CircularProgress,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  styled,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/types/RootState';

const StyledTypography = styled(Typography)`
  display: flex;
  font-family: monospace;
  font-weight: 700;
  letter-spacing: 0.3rem;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ff0000; /* Cambia el color de resaltado al pasar el ratón */
  }

  &::selection {
    background-color: #ff0000; /* Cambia el color de fondo de la selección */
    color: #ffffff; /* Cambia el color del texto de la selección */
  }
`;

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
        <Toolbar disableGutters className="flex justify-between">
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
            <StyledTypography
              variant="h6"
              noWrap
              sx={{ marginLeft: '16px' }}
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
