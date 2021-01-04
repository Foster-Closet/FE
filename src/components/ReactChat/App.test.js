import React from 'react';
import ReactDOM from 'react-dom';
import ChatApp from './ChatApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatApp />, div);
});
