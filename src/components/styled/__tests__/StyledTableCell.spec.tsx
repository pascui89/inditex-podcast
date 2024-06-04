import React from 'react';
import { render } from '@testing-library/react';
import { StyledTableCell } from '../StyledTableCell';
import '@testing-library/jest-dom/extend-expect';

global.React = React;

describe('StyledTableCell', () => {

  it('should render', () => {
    const { container } = render(<StyledTableCell/>);
    expect(container).toMatchSnapshot();
  });
});
