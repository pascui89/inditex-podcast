import { render, screen } from '@testing-library/react';

import Podcard from '../../../components/Podcard';
import { podcastMock } from 'models/Podcast';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import React from 'react';

global.React = React;

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

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

describe('Podcard E2E Test', () => {
  let store = storeMocked;

  beforeEach(() => {
    store = storeMocked;
  });

  it('should display the correct podcast name and artist', () => {
    const entry = podcastMock.feed.entry[0];
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Podcard item={entry} />
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getAllByRole("heading");
    expect(element).not.toHaveLength(0);
  });
});
