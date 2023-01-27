import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
  return (
    <div>
      <div className="py-2 px-2 mt-20 text-white mb-2">
        <Link to={`/movie/${item.id}`}>
          {item.poster_path ? (
            <img
              alt={item.title}
              className="rounded-lg cursor-pointer"
              src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
            />
          ) : (
            <img
              alt={item.title}
              className="rounded-lg cursor-pointer"
              src={"https://www.fillmurrary.com/200/300"}
            />
          )}
          <h1 className="mt-2 ">{item?.name}</h1>
        </Link>
        <ReactStars
          edit={false}
          count={5}
          size={20}
          value={item.vote_average / 2}
        />
      </div>
    </div>
  );
};

export default Card;
