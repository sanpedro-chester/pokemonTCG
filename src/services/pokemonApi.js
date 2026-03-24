import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pokemontcg.io/v2/',
  }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: ({ page = 1, search = "" }) => {
        let url = `cards?page=${page}&pageSize=20`;

        if (search) {
          url += `&q=name:${search}`;
        }

        return url;
      },
    }),
  }),
});

export const { useGetCardsQuery } = pokemonApi;