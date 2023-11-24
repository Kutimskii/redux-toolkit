import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath:'fetchFilms',
  baseQuery: fetchBaseQuery({baseUrl:'https://www.omdbapi.com'}),
  endpoints: (builder) => ({
    getFilmsByName: builder.query({
      query: (name) => `/?apikey=e174afcb&s=${name}`,
    }),
    getFilmsById:builder.query({
      query: (id) => `/?apikey=e174afcb&i=${id}`,
    }),
  }),
});

export const { useGetFilmsByNameQuery,useGetFilmsByIdQuery } = apiSlice;