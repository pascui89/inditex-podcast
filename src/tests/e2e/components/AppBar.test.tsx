import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import ResponsiveAppBar from '../../../components/AppBar';

global.React = React;

const mockStore = configureStore([]);
const storeMocked = mockStore({
  podcastReducer: {
    loading: false,
    loadingDetail: false,
    loadingEpisode: false,
  },
  episodeReducer: {
    loadingEpisode: false,
  },
});

describe('ResponsiveAppBar', () => {
  let store = storeMocked;

  beforeEach(() => {
    store = storeMocked;
  });

  it('should render without errors', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ResponsiveAppBar />
        </BrowserRouter>
      </Provider>
    );

    const appBarTitle = getByText('Podcaster');
    expect(appBarTitle).toBeInTheDocument();
  });
});
