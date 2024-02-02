// useGetAllMovies.ts

import {  useMutation, UseMutationResult } from 'react-query';
import axios from 'axios';

const getAllMovies = async (search: string, type: string) => {
    try {
      const apiKey = '9a43980b';
      const url = `https://www.omdbapi.com/?s=${search}&type=${type}&apikey=${apiKey}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching movies');
    }
  };
  
  const useGetAllMovies = (): UseMutationResult<any, unknown, { search: string; type: string }, unknown> => {
    return useMutation((formData: { search: string; type: string }) => getAllMovies(formData.search, formData.type));
  };
  
  export default useGetAllMovies;