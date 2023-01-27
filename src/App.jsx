import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import MovieId from "./MovieDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-zinc-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieId />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
