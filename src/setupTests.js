// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { cleanup, render, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App';

afterEach(cleanup);

it('renders the component', () => {
    const {getByText} = render(<App/>);
    // expect(getByText('Hello World')).toBeInTheDocument();
})