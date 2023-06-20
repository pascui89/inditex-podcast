import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { EpisodeView } from '../../../containers';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mockPodcastDetail } from '../../../models/PodcastDetail';
import { podcastMock } from '../../../models/Podcast';
import React from 'react';

global.React = React;

const mockStore = configureStore([thunk]);
const storeMocked = mockStore({
  podcastReducer: {
    filteredItems: podcastMock.feed.entry,
  },
  episodeReducer: {
    loading: false,
    podCastDetail: mockPodcastDetail
  },
});

describe('EpisodeView', () => {
  test('renders episode view correctly', () => {
    const mockPodcastId = '1';
    const { getByTestId } = render(
      <MemoryRouter initialEntries={[`/podcast/${mockPodcastId}/episode/1`]}>
        <Provider store={storeMocked}>
          <Routes>
            <Route
              path="/podcast/:podcastId/episode/:episodeId"
              element={<EpisodeView />}
            />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    const podcardDetailElement = getByTestId('podcardDetail');
    expect(podcardDetailElement).toBeInTheDocument();

    const podcardEpisodeMediaElement = getByTestId('episodeUrl');
    expect(podcardEpisodeMediaElement).toBeInTheDocument();
  });
});
