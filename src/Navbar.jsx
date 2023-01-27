import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { modifySearchQuery } from "./features/movies/moviesSlice";

const Navbar = () => {

  const [query, setQuery] = useState(" ");
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSearch = (event) => {
    if (event.key === "Enter") {
      dispatch(modifySearchQuery(query));
      navigate("/");
    }
  };
  return (
    <div className="text-2xl px-8 gap-4 bg-zinc-800 text-white h-20 justify-between flex items-center">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <input
          type="text"
          value={query}
          onKeyPress={handleSearch}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search.."
          className="px-2 w-[150px rounded outline-none md:w-[700px] text-black py-1"
        />
      </div>
    </div>
  );
};

export default Navbar;
