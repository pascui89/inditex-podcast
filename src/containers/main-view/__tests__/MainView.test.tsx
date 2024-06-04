import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { MainView } from '../MainView';
import { getMockStore } from '../../../utils/mockUtils';
import { podcastMock } from '../../../models/Podcast';
import '@testing-library/jest-dom/extend-expect';

global.React = React;

describe('MainView', () => {
  test('renders main view with loading state and displays filtered items', async () => {
    const filteredItemsMock = podcastMock.feed.entry;

    const storeMocked = getMockStore({
      podcastReducer: {
        filteredItems: filteredItemsMock,
        loading: false,
      },
    });

    render(
      <Provider store={storeMocked}>
        <MemoryRouter>
          <MainView />
        </MemoryRouter>
      </Provider>
    );

    // Verificar que se muestre el estado de carga
    const loadingElement = screen.getAllByText('Filter podcasts...');
    expect(loadingElement[0]).toBeInTheDocument();

    await waitFor(() => {
      const filteredItems = screen.getAllByTestId('podcastName');
      expect(filteredItems).toHaveLength(filteredItemsMock.length);

      filteredItems.forEach((item, index) => {
        expect(item).toHaveTextContent(filteredItemsMock[index]['im:name'].label);
      });
    });
  });
});
