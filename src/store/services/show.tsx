import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const showAPI = createApi({
  reducerPath: 'show',
  baseQuery: fetchBaseQuery({
    // link to the base API is located in package.json => "proxy"
    // In case of CORS error
    baseUrl: '/'
  }),

  endpoints: (builder) => ({
    getShowList: builder.query({
      query: (searchFor: string) => `search/shows?q=${searchFor}` as string
    }),
    getAnyShowList: builder.query({
      query: (pageOfInterest: string) => `shows?page=${pageOfInterest}`
    }),
    fillerImage: builder.query({
      query: () => 'shows/1/images'
    }),
  })
})

export const { reducer } = showAPI
export const { useGetShowListQuery, useGetAnyShowListQuery, useFillerImageQuery } = showAPI
export default showAPI