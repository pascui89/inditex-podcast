import {
  CircularProgress,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { StyledAvatar, StyledTypography } from '../styled';
import useResponsiveAppBar from './useResponsiveAppBar';

/**
 * ResponsiveAppBar Component
 *
 * Displays a responsive app bar with a logo, title, and loading spinner.
 */
export default function ResponsiveAppBar() {

  const { 
    state: { showSpinner }, 
    actions: { handleGoHomeRedirect } 
  } = useResponsiveAppBar();

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
