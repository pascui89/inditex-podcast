import React from 'react';
import { render } from '@testing-library/react';
import { StyledCardOverflowAuto } from '../StyledCard';
import '@testing-library/jest-dom/extend-expect';

global.React = React;

describe('StyledCardOverflowAuto', () => {

  it('should render', () => {
    const { container } = render(<StyledCardOverflowAuto/>);
    expect(container).toMatchSnapshot();
  });
});
