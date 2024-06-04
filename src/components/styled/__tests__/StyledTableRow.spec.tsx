import React from 'react';
import { render } from '@testing-library/react';
import { StyledTableRow } from '../StyledTableRow';
import '@testing-library/jest-dom/extend-expect';

global.React = React;

describe('StyledTableRow', () => {

  it('should render', () => {
    const { container } = render(<StyledTableRow/>);
    expect(container).toMatchSnapshot();
  });
});
