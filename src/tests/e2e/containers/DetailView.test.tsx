import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { DetailView } from '../../../containers';
import configureStore from 'redux-mock-store';

import React from 'react';

global.React = React;

const mockStore = configureStore([]);
const storeMocked = mockStore({
  podcastReducer: {
    loading: false,
    loadingDetail: false,
    loadingEpisode: false,
    filteredItems: [],
  },
  episodeReducer: {
    loadingEpisode: false,
    podCastDetail: null,
    loading: true,
    error: null,
  },
});

describe('DetailView', () => {
  test('displays loading alert message and fetches podcast detail', async () => {
    const mockPodcastId = '12345';
    const { getByTestId } = render(
      <MemoryRouter initialEntries={[`/podcast/${mockPodcastId}`]}>
        <Provider store={storeMocked}>
          <Routes>
            <Route path="/podcast/:podcastId" element={<DetailView />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    const loadingAlertElement = await waitFor(() =>
        getByTestId('loading-skeleton')
    );
    expect(loadingAlertElement).toBeInTheDocument();
  });

  test('displays error alert message', async () => {
    const mockPodcastId = '12345';
    const mockErrorMessage = 'An error occurred during the request, please try again.';

    const storeMocked = mockStore({
      podcastReducer: {
        loading: false,
        loadingDetail: false,
        loadingEpisode: false,
        filteredItems: [],
      },
      episodeReducer: {
        loadingEpisode: false,
        podCastDetail: null,
        loading: true,
        error: mockErrorMessage,
      },
    });

    const { getByText } = render(
      <MemoryRouter initialEntries={[`/podcast/${mockPodcastId}`]}>
        <Provider store={storeMocked}>
          <Routes>
            <Route path="/podcast/:podcastId" element={<DetailView />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    const errorAlertElement = await waitFor(() =>
      getByText('An error occurred during the request, please try again.')
    );
    expect(errorAlertElement).toBeInTheDocument();
  });
});
