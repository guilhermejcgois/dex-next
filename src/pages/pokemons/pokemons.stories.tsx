import React from "react";
import { graphql } from "msw";
import {} from "gqty";
import { ComponentMeta } from "@storybook/react";

import PokemonsPage from ".";

export default {
  title: "Pages/Pokemons",
  component: PokemonsPage,
} as ComponentMeta<typeof PokemonsPage>;

export const Page = () => <PokemonsPage />;
Page.parameters = {
  msw: {
    handlers: [
      graphql.operation(async (request, response, context) => {
        const reqJson = await request.json();
        if (
          reqJson.query ===
          "query($limit1:Int){allPokemon_7fe41_fb058:allPokemon(limit:$limit1){__typename id}}"
        ) {
          return response(
            context.data({
              allPokemon_7fe41_fb058: [
                {
                  __typename: "Pokemon",
                  id: 1,
                },
                {
                  __typename: "Pokemon",
                  id: 2,
                },
                {
                  __typename: "Pokemon",
                  id: 3,
                },
                {
                  __typename: "Pokemon",
                  id: 4,
                },
                {
                  __typename: "Pokemon",
                  id: 5,
                },
                {
                  __typename: "Pokemon",
                  id: 6,
                },
                {
                  __typename: "Pokemon",
                  id: 7,
                },
                {
                  __typename: "Pokemon",
                  id: 8,
                },
                {
                  __typename: "Pokemon",
                  id: 9,
                },
              ],
            })
          );
        }
        if (
          reqJson.query ===
          "query($limit1:Int){allPokemon_7fe41_fb058:allPokemon(limit:$limit1){__typename id nat_dex_num name sprites{__typename front_default}}}"
        ) {
          return response(
            context.data({
              allPokemon_7fe41_fb058: [
                {
                  __typename: "Pokemon",
                  id: 1,
                  nat_dex_num: 1,
                  name: "bulbasaur",
                  sprites: {
                    __typename: "Sprites",
                    front_default:
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                  },
                },
                {
                  __typename: "Pokemon",
                  id: 2,
                  nat_dex_num: 2,
                  name: "ivysaur",
                  sprites: {
                    __typename: "Sprites",
                    front_default:
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                  },
                },
                {
                  __typename: "Pokemon",
                  id: 3,
                  nat_dex_num: 3,
                  name: "venusaur",
                  sprites: {
                    __typename: "Sprites",
                    front_default:
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
                  },
                },
                {
                  __typename: "Pokemon",
                  id: 4,
                  nat_dex_num: 4,
                  name: "charmander",
                  sprites: {
                    __typename: "Sprites",
                    front_default:
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                  },
                },
                {
                  __typename: "Pokemon",
                  id: 5,
                  nat_dex_num: 5,
                  name: "charmeleon",
                  sprites: {
                    __typename: "Sprites",
                    front_default:
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
                  },
                },
                {
                  __typename: "Pokemon",
                  id: 6,
                  nat_dex_num: 6,
                  name: "charizard",
                  sprites: {
                    __typename: "Sprites",
                    front_default:
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
                  },
                },
                {
                  __typename: "Pokemon",
                  id: 7,
                  nat_dex_num: 7,
                  name: "squirtle",
                  sprites: {
                    __typename: "Sprites",
                    front_default:
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
                  },
                },
                {
                  __typename: "Pokemon",
                  id: 8,
                  nat_dex_num: 8,
                  name: "wartortle",
                  sprites: {
                    __typename: "Sprites",
                    front_default:
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
                  },
                },
                {
                  __typename: "Pokemon",
                  id: 9,
                  nat_dex_num: 9,
                  name: "blastoise",
                  sprites: {
                    __typename: "Sprites",
                    front_default:
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
                  },
                },
              ],
            })
          );
        }
        return response(context.data({}));
      }),
    ],
  },
};
