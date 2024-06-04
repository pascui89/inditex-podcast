import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PodcartEpisodes from '../PodcartEpisodes';
import { mockPodcastDetail } from '../../../models/PodcastDetail';
import '@testing-library/jest-dom/extend-expect';

global.React = React;

describe('PodcartEpisodes', () => {
  it('should renders episode details', () => {
    const { container } = render(
      <Router>
        <PodcartEpisodes loading={false} podCastDetail={mockPodcastDetail} />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it('should renders loading state when loading is true', () => {
    const wrapper = render(
      <Router>
        <PodcartEpisodes loading={true} podCastDetail={null} />
      </Router>
    );

    const skeletonElements = wrapper.getAllByTestId('skeleton');
    expect(skeletonElements.length).toBe(10);
  });

  it('should renders episode details when loading is false and podCastDetail is provided', () => {
    const wrapper = render(
      <Router>
        <PodcartEpisodes loading={false} podCastDetail={mockPodcastDetail} />
      </Router>
    );

    const episodeNameElements = wrapper.getAllByRole('link');
    expect(episodeNameElements.length).toBe(mockPodcastDetail.results.length);
  });
});
