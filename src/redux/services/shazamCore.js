import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core7.p.rapidapi.com',
            prepareHeaders: (headers) => {
              headers.set('x-rapidapi-key', 'f703549751msh0dfcbd210f8c713p14b8d8jsn4fa4e3346f3c');

              return headers;

            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/get-top-songs-in-world' }),
            
        }),
    });

    export const {
      useGetTopChartsQuery,
    } = shazamCoreApi;


