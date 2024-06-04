import React from 'react';
import { render } from '@testing-library/react';
import { StyledTypography } from '../StyledTypography';
import '@testing-library/jest-dom/extend-expect';

global.React = React;

describe('StyledTypography', () => {

  it('should render', () => {
    const { container } = render(<StyledTypography/>);
    expect(container).toMatchSnapshot();
  });
});
