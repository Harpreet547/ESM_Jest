import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
    it('should render', () => {
        render(<App />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument()
    });
});