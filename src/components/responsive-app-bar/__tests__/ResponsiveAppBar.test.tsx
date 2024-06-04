import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ResponsiveAppBar from '../../../components/responsive-app-bar/ResponsiveAppBar';
import '@testing-library/jest-dom/extend-expect';

import { getMockStore } from '../../../utils/mockUtils';

global.React = React;

describe('ResponsiveAppBar', () => {

  it('should render', () => {
    const { container } = render(
      <Provider store={getMockStore()}>
        <BrowserRouter>
          <ResponsiveAppBar />
        </BrowserRouter>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
