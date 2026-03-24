import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pokemontcg.io/v2/',
  }),

  endpoints: (builder) => ({
    getCards: builder.query({
      query: ({ page = 1, search = "", type = "" }) => {
        let queryParts = [];

        if (search) {
          queryParts.push(`name:${search}`);
        }

        if (type) {
          queryParts.push(`types:${type}`);
        }

        let queryString = queryParts.length
          ? `&q=${queryParts.join(" ")}`
          : "";

        return `cards?page=${page}&pageSize=20${queryString}`;
      },
    }),
  }),
});

export const { useGetCardsQuery } = pokemonApi;