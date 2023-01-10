import axios from 'axios';
export const getColors = async () => {
  try {
    const response = await axios.get(
      `https://reqres.in/api/products?per_page=12`
    );
    if (response.status === 404) {
      throw new Response('Not Found', { status: 404 });
    }
    const colors = response.data;
    return colors;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Request made and server responded
      console.error(
        error.response.data,
        error.response.status,
        error.response.headers
      );
      if (error.request) {
        // The request was made but no response was received
        console.error(error.request);
      }
    }
    console.error('Error', error);
  }
};
