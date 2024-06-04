import { render, screen } from '@testing-library/react';

import Podcard from '../Podcard';
import { podcastMock } from '../../../models/Podcast';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import React from 'react';

global.React = React;

import { getMockStore } from '../../../utils/mockUtils';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Podcard E2E Test', () => {  
  it('should renders episode details', () => {
    const { container } = render(
      <Provider store={getMockStore()}>
        <BrowserRouter>
          <Podcard item={podcastMock.feed.entry[0]} />
        </BrowserRouter>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
  it('should display the correct podcast name and artist', () => {
    render(
      <Provider store={getMockStore()}>
        <BrowserRouter>
          <Podcard item={podcastMock.feed.entry[0]} />
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getAllByRole('heading');
    expect(element).not.toHaveLength(0);
  });
});
