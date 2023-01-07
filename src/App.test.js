import React from 'react';
import App from './App';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';


afterEach(cleanup);

test('submits the form', () => {
    const onSubmit = jest.fn();
    const { container } = render(
      <App onSubmit={onSubmit} />
    );
  
    const fnameInput = container.querySelector('input[name="fname"]')
    console.log(fnameInput)
  });



