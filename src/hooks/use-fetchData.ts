// import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useFetchData = (page: number) => {
  const navigate = useNavigate();
  const getColors = async (page: number) => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/products?page=${page}`
      );
      if (response.status !== 200) {
        throw new Error('Failed to fetch colors. Status: 500');
      }
      const colors = response.data;
      return colors;
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
      navigate('/');
    }
  };
  getColors(page);
  // console.log('page', page);
  // const fetchColors = async () => {
  //   try {
  //     console.log('page', page);
  //     const response = await axios.get(
  //       `https://reqres.in/api/products?page=${page}`
  //     );
  //     if (response.status !== 200) {
  //       throw new Error('Failed to fetch colors. Status: 500');
  //     }
  //     const colors = response.data;
  //     return colors;
  //   } catch (error) {
  //     if (error instanceof Error) console.error(error.message);
  //     navigate('/');
  //   }
  // };
  // const { isError, isLoading, data, error } = useQuery(
  //   ['colors'],
  //   fetchColors,
  //   { staleTime: 60000 }
  // );
  // return { isError, isLoading, data, error };
};

export default useFetchData;
