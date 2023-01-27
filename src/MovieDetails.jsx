import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Components/Card";

import {
  useGetMovieByIdQuery,
  useGetRecommendationQuery,
} from "./features/Service/MovieSlice";

const ProductId = () => {
  const [items, setItems] = useState(8);
  const { id } = useParams();
  const { data: movie } = useGetMovieByIdQuery(id);
  const { data } = useGetRecommendationQuery(id);

  return (
    <div className="flex flex-wrap   p-4 justify-evenly  text-white  ">
      <div className="flex ">
        {movie?.poster_path ? (
          <img
            alt={movie?.title}
            className="rounded-lg cursor-pointer "
            src={`https://image.tmdb.org/t/p/w400/${movie?.poster_path}`}
          />
        ) : (
          <img
            alt={movie?.title}
            className="rounded-lg cursor-pointer"
            src={"https://www.fillmurrary.com/200/300"}
          />
        )}
      </div>
      <div className="max-w-md mt-3">
        <h1 className="mb-4">{movie?.name}</h1>
        <h1 className="mb-4">{movie?.last_air_date}</h1>
        <h1 className="mb-4">{movie?.number_of_seasons} Seasons</h1>
        <p>{movie?.overview}</p>
      </div>
      <div class="flex flex-wrap gap-5 px-10 justify-center">
        {data?.results?.slice(0, items).map((movie) => (
          <Card key={movie.id} item={movie} />
        ))}
        <div>
          {items < 8 ? (
            <button className="text-7xl text-white" onClick={setItems(items + 5)}>Load more</button>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductId;
