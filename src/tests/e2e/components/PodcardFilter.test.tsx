import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import PodcardFilter from '../../../components/PodcardFilter';
import React from 'react';

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

describe('PodcardFilter', () => {
  let store = storeMocked;

  beforeEach(() => {
    store = storeMocked;
  });
  test('renders filter input and badge', () => {
    render(
      <Provider store={store}>
        <PodcardFilter />
      </Provider>
    );

    // Verificar la existencia del input de filtro
    const filterInput = screen.getByTestId('filterText');
    expect(filterInput).toBeInTheDocument();

    // Verificar la existencia del badge
    const badgeElement = screen.getByTestId('badgeData');
    expect(badgeElement).toBeInTheDocument();
  });
});
