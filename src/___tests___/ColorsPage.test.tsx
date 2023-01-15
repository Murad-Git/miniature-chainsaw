import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import ColorsPage from '../pages/ColorsPage';
import { renderWithProviders } from './test-utils';

describe('Render ColorsPage component', () => {
  it('display colors table', async () => {
    // Arrange
    renderWithProviders(<ColorsPage />);
    const loadingElement = screen.getByText('Loading...');
    const firstColor = screen.findByText('ID: 1');
    // Should show loading state and no colors initially, colors are not fetched yet
    expect(loadingElement).toBeInTheDocument();
    expect(screen.queryByText('ID: 1')).not.toBeInTheDocument();
    // expect(await firstColor).not.toBeInTheDocument();

    // Assert
    // Should show colors and no loading state. Colors are rendered
    expect(await firstColor).toBeInTheDocument();
    expect(loadingElement).not.toBeInTheDocument();
  });
});
