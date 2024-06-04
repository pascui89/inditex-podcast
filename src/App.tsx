import { Provider } from 'react-redux';
import { store } from './store';

import { BrowserRouter } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import ResponsiveAppBar from './components/responsive-app-bar/ResponsiveAppBar';
import { Router } from './interfaces';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <BrowserRouter basename="/inditex-podcast/">
            <Grid item xs={12}>
              <ResponsiveAppBar />
            </Grid>
            <Router />
          </BrowserRouter>
        </Grid>
      </Container>
    </Provider>
  );
}

export default App;
