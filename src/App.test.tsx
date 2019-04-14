import * as React from 'react';
import { create } from 'react-test-renderer';

import App from './App';

describe('App', () => {
  it('snapshot test', () => {
    const tree = create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
