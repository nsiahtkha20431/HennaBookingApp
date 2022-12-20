import '@testing-library/jest-dom';
import { cleanup, render, fireEvent, screen } from '@testing-library/react';

import React from 'react';
import App from './App';

afterEach(cleanup);

// it('renders the component', () => {
//     const {getByText} = render(<App/>);
//     expect(getByText('Hello World')).toBeInTheDocument();
// })

test('submits the form', () => {
    const onSubmit = jest.fn();
    const { container } = render(
      <App onSubmit={onSubmit} />
    );
  
    const fnameInput = container.querySelector('input[name="fname"]')
    console.log(fnameInput)
    // const lnameInput = screen.getByLabelText('Last Name:');
    // const form = screen.getByTestId('form');
  
    // fireEvent.change(fnameInput, { target: { value: 'John' } });
    // fireEvent.change(lnameInput, { target: { value: 'john@example.com' } });
    // fireEvent.submit(form);
  
    // expect(onSubmit).toHaveBeenCalledWith({
    //   name: 'John',
    //   email: 'john@example.com',
    // });
  });