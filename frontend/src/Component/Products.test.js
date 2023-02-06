import {render} from '@testing-library/react';
import Products from "./Products";

test('test', () => {
    render(<Products/>)
    expect(true).toBe(true)
})