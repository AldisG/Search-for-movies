import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesAPI = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    // link to the base API is located in package.json => "proxy"
    // In case of CORS error
    baseUrl: '/'
  }),

  // Endpoints for different calls
  endpoints: (builder) => ({
    getMovieList: builder.query({
      query: (searchFor: string) => `search/shows?q=${searchFor}` as string
    }),
    getAnyMoviesList: builder.query({
      query: (pageOfInterest: string) => `shows?page=${pageOfInterest}`
    }),
    test: builder.query({
      query: (value: string) => 'shows?page=' + value
    }),
  })
})

export const { reducer } = moviesAPI
export const { useGetMovieListQuery, useGetAnyMoviesListQuery, useTestQuery } = moviesAPI
export default moviesAPI