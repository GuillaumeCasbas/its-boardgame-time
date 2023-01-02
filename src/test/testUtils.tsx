import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import store from '../data/redux/store';

export const setup = (Children: JSX.Element) => {
  const view = userEvent.setup();

  render(
    <Provider store={store}>
      {Children}
    </Provider>,
  );

  return ({ view });
};

export default {};
