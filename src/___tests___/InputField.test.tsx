import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import InputField from '../components/InputField';
import { renderWithProviders } from './test-utils';

describe('InputField component', () => {
  it(`render InputField component`, async () => {
    // Arrange
    renderWithProviders(<InputField />);
    // Assert
    expect(
      screen.getByText('Input your favourite color ID')
    ).toBeInTheDocument();
  });
  it(`type a number in InputField`, async () => {
    const handleSubmit = jest.fn();
    // Arrange
    renderWithProviders(<InputField onSubmit={handleSubmit} />);

    // Act
    const inputElement = screen.getByPlaceholderText('Enter color ID');

    fireEvent.keyDown(inputElement, {
      key: '5',
      charCode: 53,
    });

    // Assert
    expect(handleSubmit).toHaveBeenCalled();
  });
});
