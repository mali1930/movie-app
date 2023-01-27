import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Components/Card";
import { useGetMoviesQuery } from "./features/Service/MovieSlice";

const Home = () => {
  const query = useSelector((s) => s.movies.query);
  const { data } = useGetMoviesQuery({ query });
  const [movies, setMovies] = useState(10);

  return (
    <>
      <div className="flex  flex-wrap px-10 gap-5 justify-center">
        {data?.results?.slice(0, movies).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        {movies < 20 ? (
          <button
            onClick={() => setMovies(movies + 5)}
            className="bg-blue-700 mt-4 text-white p-2 mb-3 cursor-pointer rounded-lg"
          >
            Load More
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Home;
