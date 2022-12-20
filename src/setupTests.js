// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
// import { cleanup, render, fireEvent } from '@testing-library/react';
// import React from 'react';
// import App from './App';

// afterEach(cleanup);

// // it('renders the component', () => {
// //     const {getByText} = render(<App/>);
// //     expect(getByText('Hello World')).toBeInTheDocument();
// // })

// test('submits the form', () => {
//     const onSubmit = jest.fn();
//     const { getByTestId, getByLabelText } = render(
//       <App onSubmit={onSubmit} />
//     );
  
//     const fnameInput = getByLabelText('First Name:');
//     const lnameInput = getByLabelText('Last Name:');
//     const form = getByTestId('form');
  
//     fireEvent.change(fnameInput, { target: { value: 'John' } });
//     fireEvent.change(lnameInput, { target: { value: 'john@example.com' } });
//     fireEvent.submit(form);
  
//     expect(onSubmit).toHaveBeenCalledWith({
//       name: 'John',
//       email: 'john@example.com',
//     });
//   });
