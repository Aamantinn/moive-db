// Searchbar.tsx


import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useGetAllMovies from '../hooks/useGetAllMovies';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
  search: yup.string().required('Please enter the name of the movie/series/episode'),
  type: yup.string().required('Please select the type of the movie/series/episode'),
});

export const Searchbar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { data, isLoading: isLoadingGetMovies, isError: isErrorGetMovies, mutate } = useGetAllMovies();
  


  const onSubmit = handleSubmit(async (formData) => {
    try {
      await mutate({ search: formData.search, type: formData.type });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });

  return (
    <div className='bg-neutral-50 px-10 py-10 h-full lg:h-max '>
       <form
        onSubmit={onSubmit}
        className="flex flex-col w-full md:p-10  gap-4"
      >
        <div className="flex md:flex-row gap-4 flex-col">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="searchbar" className="font-semibold text-lg">
              Name of Movie/series/episode <span className='text-red-600 '>*</span>
            </label>
            <input
              {...register("search")}
              type="text"
              id="searchbar"
              placeholder="type here..."
              className="w-full px-2 py-2 border-2 rounded-md"
            />
            {errors.search && (
              <p className="text-red-500">{errors.search.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full gap-4">
            <label className="font-semibold">Select type <span className='text-red-600 '>*</span></label>
            <div className="flex flex-row items-center justify-start gap-2">
              <input
                type="radio"
                id="movie"
                {...register("type")}
                value="movie"
              />
              <label htmlFor="movie" className="font-semibold text-lg">
                Movie
              </label>

              <input
                type="radio"
                id="series"
                {...register("type")}
                value="series"
              />
              <label htmlFor="series" className="font-semibold text-lg">
                Series
              </label>
            </div>
            {errors.type && (
              <p className="text-red-500">{errors.type.message}</p>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="px-8 py-3 mt-4 font-semibold rounded-md text-white text-lg bg-blue-500 hover:bg-blue-700"
          >
            {isLoadingGetMovies ? "Searching..." : "Search"}
          </button>
        </div>
      </form>
      
      {data && data.Response === 'False' && (
  <p className="text-red-500 mt-4 px-10">{data.Error}</p>
)}


{data && data.Search && Array.isArray(data.Search) && data.Search.length > 0 &&  (
        <div className="mt-4 h-full md:px-10">
          <h1 className='text-2xl pb-5 font-bold'>Results</h1>
          <table className="w-full table-auto overflow-auto h-96  border-gray-400">
            <thead>
              <tr>
                <th className="border-b-2 text-left text-lg text-neutral-600 border-neutral-200 p-2">Title</th>
                <th className="border-b-2 text-left text-lg text-neutral-600 border-neutral-200 p-2">Year</th>
                <th className="border-b-2 text-left text-lg text-neutral-600 border-neutral-200 p-2">Type</th>
                <th className="border-b-2 text-left text-lg text-neutral-600 border-neutral-200 p-2">Detail View</th>
              </tr>
            </thead>
            <tbody>
              {data.Search.map((result: any) => (
                <tr key={result.imdbID}>
                  <td className="border-b-2 font-semibold border-neutral-200 p-2">{result.Title}</td>
                  <td className="border-b-2 font-semibold border-neutral-200 p-2">{result.Year}</td>
                  <td className="border-b-2 font-semibold border-neutral-200 p-2">{result.Type}</td>
                  <td className="border-b-2 font-semibold border-neutral-200 p-2">
                    <Link to={`/${result.imdbID}`}>
                      <button className="px-4 py-2 bg-rose-400 text-white text-xs md:text-base rounded-md">Show more</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {isLoadingGetMovies && <p>Loading...</p>}
      {isErrorGetMovies && 
      (<p>Something went wrong. Please try again later.</p>
)}
    </div>
  );
};
