import React from 'react';
import { render } from '@testing-library/react';
import { StyledCardMedia } from '../StyledCardMedia';
import '@testing-library/jest-dom/extend-expect';

global.React = React;

describe('StyledCardMedia', () => {

  it('should render', () => {
    const { container } = render(<StyledCardMedia/>);
    expect(container).toMatchSnapshot();
  });
});
