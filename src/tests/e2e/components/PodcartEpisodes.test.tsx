import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import PodcartEpisodes from '../../../components/PodcartEpisodes';
import React from 'react';
import { mockPodcastDetail } from '../../../models/PodcastDetail';

global.React = React;

describe('PodcartEpisodes', () => {
  test('renders loading state when loading is true', () => {
    const loading = true;
    const podCastDetail = null;

    const wrapper = render(
      <Router>
        <PodcartEpisodes loading={loading} podCastDetail={podCastDetail} />
      </Router>
    );

    const skeletonElements = wrapper.getAllByTestId('skeleton');
    expect(skeletonElements.length).toBe(10);
  });

  test('renders episode details when loading is false and podCastDetail is provided', () => {
    const loading = false;

    const wrapper = render(
      <Router>
        <PodcartEpisodes loading={loading} podCastDetail={mockPodcastDetail} />
      </Router>
    );

    const episodeNameElements = wrapper.getAllByRole('link');
    expect(episodeNameElements.length).toBe(mockPodcastDetail.results.length);
  });
});
