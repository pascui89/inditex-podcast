import React from 'react';
import { render } from '@testing-library/react';
import { StyledCardContent, StyledCardContentPaddingNone } from '../StyledCardContent';
import '@testing-library/jest-dom/extend-expect';

global.React = React;

describe('StyledCardContent', () => {

  it('should render StyledCardContent', () => {
    const { container } = render(<StyledCardContent/>);
    expect(container).toMatchSnapshot();
  });

  it('should render StyledCardContentPaddingNone', () => {
    const { container } = render(<StyledCardContentPaddingNone/>);
    expect(container).toMatchSnapshot();
  });
});
