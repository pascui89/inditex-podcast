import { render } from '@testing-library/react';
import PodcardEpisodesCounter from '../../../components/PodcardEpisodesCounter';
import { mockPodcastDetail } from '../../../models/PodcastDetail';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

global.React = React;

describe('PodcardEpisodesCounter', () => {
  test('renders loading skeleton when loading prop is true', () => {
    const wrapper = render(
      <PodcardEpisodesCounter loading={true} podCastDetail={null} />
    );

    const skeletonElement = wrapper.getByTestId('loading-skeleton');
    expect(skeletonElement).toBeInTheDocument();
  });

  test('renders episode count when loading prop is false', () => {
    const wrapper = render(
      <PodcardEpisodesCounter
        loading={false}
        podCastDetail={mockPodcastDetail}
      />
    );

    const countElement = wrapper.getByText('Episodes: 21');
    expect(countElement).toBeInTheDocument();
  });
});
