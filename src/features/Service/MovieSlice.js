import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.TMDB_KEY;

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    //movie
    getMovies: builder.query({
      query: ({ query }) => {
        if (query)
          return `https://api.themoviedb.org/3/search/movie?api_key=29d93b349279af1120afee12920275f6&language=en-US&page=1&include_adult=false&query=${query}`;
        return `https://api.themoviedb.org/3/tv/popular?api_key=29d93b349279af1120afee12920275f6&language=en-US&page=1`;
      },
    }),
    //id
    getMovieById: builder.query({
      query: (id) =>
        `https://api.themoviedb.org/3/tv/${id}?api_key=29d93b349279af1120afee12920275f6&language=en-US`,
    }),

    getRecommendation: builder.query({
      query: (id) =>
        `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=29d93b349279af1120afee12920275f6&language=en-US&page=1`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useGetRecommendationQuery,
} = productsApi;
