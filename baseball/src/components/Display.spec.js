import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('Renders the number of balls and strikes passed through props', () => {
        const { getByTestId, debug } = render(
            <Display strikes="1" balls="1" />
        );

        const strikes = getByTestId('strikes');
        const balls = getByTestId('balls');

        expect(strikes).toHaveTextContent('1');
        expect(balls).toHaveTextContent('1');
    });
});
