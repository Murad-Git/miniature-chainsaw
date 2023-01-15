import { screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import '@testing-library/jest-dom';
import Color from '../components/Color';
import { getColors } from '../util/getColors';
import { renderWithProviders } from './test-utils';

describe('Render Color component', () => {
  it('displays the table of colors', async () => {
    const fetchData = async () => {
      const { data } = await getColors();
      return data;
    };
    const data = await fetchData();
    // Arrange
    renderWithProviders(<Color color={data[0]} />);

    // ✅ Assert that the correct posts have loaded.
    expect(await screen.findByText(/ID: 1/i)).toBeInTheDocument();
  });
});

// const server = setupServer(
//   // Describe network behavior with request handlers.
//   // Tip: move the handlers into their own module and
//   // import it across your browser and Node.js setups!
//   rest.get('/', (req, res, ctx) => {
//     return res(ctx.status(200));
//   })
// );

// // Enable request interception.
// beforeAll(() => server.listen());

// // Reset handlers so that each test could alter them
// // without affecting other, unrelated tests.
// afterEach(() => server.resetHandlers());

// // Don't forget to clean up afterwards.
// afterAll(() => server.close());
