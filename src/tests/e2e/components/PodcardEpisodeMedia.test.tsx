import { render } from '@testing-library/react';
import PodcardEpisodeMedia from '../../../components/PodcardEpisodeMedia';

import { mockPodcastDetail } from '../../../models/PodcastDetail';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

global.React = React;

describe('PodcardEpisodeMedia', () => {
  test('renders loading skeleton when loading prop is true', () => {
    const wrapper = render(
      <PodcardEpisodeMedia loading={true} podCastDetail={null} />
    );
    expect(wrapper.container.querySelector('#skeletonLoader')).toBeDefined();
  });

  test('renders episode details when loading prop is false', () => {
    const wrapper = render(
      <PodcardEpisodeMedia loading={false} podCastDetail={mockPodcastDetail} />
    );
    const descriptionElement = wrapper.getByTestId('episodeDescription');
    expect(descriptionElement).toBeDefined();
    const audioElement = wrapper.getByTestId('episodeUrl');
    expect(audioElement).toBeDefined();
  });
});
