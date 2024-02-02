// Moviepage.tsx

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface MovieDetails {
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  Genre: string;
  Plot: string;
  Released: string;
  // Add more properties as needed
}

const Moviepage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = React.useState<MovieDetails | null>(
    null
  );

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = "9a43980b"; // Replace with your actual API key
        const url = `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;
        const response = await axios.get<MovieDetails>(url); // Provide MovieDetails as a generic type
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="p-10  bg-neutral-50">
      {movieDetails ? (
        <div className="flex flex-col">
          <div className="flex items-center flex-col w-full md:flex-row md:gap-20">
            <img
              src={movieDetails.Poster}
              alt="Movie Poster"
              className="w-52 f "
            />
            <div className="flex flex-col gap-2 pt-10 justify-start">
              <h1 className="text-2xl font-bold">{movieDetails.Title}</h1>
              <span>
                {movieDetails.Year}/ {movieDetails.Genre}
              </span>
            </div>
          </div>
          <div className="pt-10 w-full">
            <table className="text-left w-full">
            <thead>
              <tr className="border-b-2" >
                <th className="text-sm py-3">Title</th>
                <td className="pl-5 py-3 text-sm">{movieDetails.Title}</td>
              </tr>
              <tr className="border-b-2">
                <th className="text-sm py-3">Year</th>
                <td className="pl-5 py-3 text-sm">{movieDetails.Year}</td>
              </tr>
              <tr className="border-b-2">
                <th className="text-sm py-3">Genre</th>
                <td className="pl-5 py-3 text-sm">{movieDetails.Genre}</td>
              </tr>
              <tr className="border-b-2">
                <th className="text-sm py-3">Plot</th>
                <td className="pl-5 py-3 text-sm">{movieDetails.Plot}</td>
              </tr>
              <tr className="border-b-2">
                <th className="text-sm py-3">Type</th>
                <td className="pl-5 py-3 text-sm">{movieDetails.Type}</td>
              </tr>
              <tr className="border-b-2">
                <th className="text-sm py-3">Released</th>
                <td className="pl-5 py-3 text-sm">{movieDetails.Released}</td>
              </tr>
              </thead>
            </table>
          </div>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Moviepage;
