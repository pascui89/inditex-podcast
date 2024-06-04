import React from 'react';
import { render } from '@testing-library/react';
import { StyledMainCardContent } from '../StyledMainCardContent';
import '@testing-library/jest-dom/extend-expect';

global.React = React;

describe('StyledMainCardContent', () => {

  it('should render', () => {
    const { container } = render(<StyledMainCardContent/>);
    expect(container).toMatchSnapshot();
  });
});
