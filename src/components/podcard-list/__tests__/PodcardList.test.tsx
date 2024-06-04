import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import React from 'react';
import { PodcardList } from '../../../components/podcard-list/PodcardList';
import { podcastMock } from '../../../models/Podcast';
import { BrowserRouter as Router } from 'react-router-dom';

global.React = React;

describe('PodcardList', () => {
  test('renders loading data when loading is true', () => {
    const loading = true;

    const wrapper = render(<Router>
            <PodcardList items={[]} loading={loading} />
        </Router>);

    const loadingDataElements = wrapper.getAllByTestId('loading-data');
    expect(loadingDataElements.length).toBe(20);
  });

  test('renders podcast cards when loading is false', () => {
    const loading = false;

    const wrapper = render(<Router>
            <PodcardList items={podcastMock.feed.entry} loading={loading} />
        </Router>);
    const podcastCardElements = wrapper.getAllByText('Podcast Name 1')[0];
    expect(podcastCardElements).toBeInTheDocument();
  });
});
