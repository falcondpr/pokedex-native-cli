import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IPokemon, IPokemonResponse} from '../interfaces/pokemon';

export const pokemonAPI = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2'}),
  endpoints: builder => ({
    getPokemonByName: builder.query<IPokemon, string>({
      query: name => `/pokemon/${name}`,
    }),
    getAllPokemon: builder.query<IPokemonResponse, void>({
      query: () => '/pokemon',
    }),
  }),
});

export const {useGetPokemonByNameQuery, useGetAllPokemonQuery} = pokemonAPI;
