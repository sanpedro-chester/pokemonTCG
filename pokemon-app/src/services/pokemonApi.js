import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pokemontcg.io/v2/',
  }),

  endpoints: (builder) => ({
    getCards: builder.query({
      query: ({ page = 1, search = "", type = "", hpMin = "", hpMax = "", set = "" }) => {
        let url = `cards?page=${page}&pageSize=20`;

        let filters = [];

        if (search) filters.push(`name:${search}`);
        if (type) filters.push(`types:${type}`);
        if (set) filters.push(`set.name:${set}`);
        if (hpMin || hpMax) {
          filters.push(`hp:[${hpMin || 0} TO ${hpMax || 999}]`);
        }

        if (filters.length > 0) {
          url += `&q=${filters.join(" AND ")}`;
        }

        return url;
      }
    }),
  }),
});

export const { useGetCardsQuery } = pokemonApi;