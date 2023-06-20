import { render, screen } from '@testing-library/react';

import React from 'react';
import PodcardDetail from '../../../components/PodcardDetail';
import { podcastMock } from '../../../models/Podcast';

global.React = React;

describe('PodcardDetail Test', () => {
  it('should render correctly with podcast data', () => {
    const entry = podcastMock.feed.entry[0];
    render(
      <PodcardDetail podCast={entry} />
    );
    const element = screen.getAllByRole("heading");
    expect(element).not.toHaveLength(0);
  });

  it('should not render anything without podcast data', () => {
    render(<PodcardDetail podCast={undefined} />);
    const podcardDetail = screen.queryByTestId('podcardDetail');
    expect(podcardDetail).toBeNull();
  });
});
