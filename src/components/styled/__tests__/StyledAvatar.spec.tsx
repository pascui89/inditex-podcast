import React from 'react';
import { render } from '@testing-library/react';
import { StyledAvatar } from '../StyledAvatar';
import '@testing-library/jest-dom/extend-expect';

global.React = React;

describe('StyledAvatar', () => {

  it('should render', () => {
    const { container } = render(<StyledAvatar/>);
    expect(container).toMatchSnapshot();
  });
});
