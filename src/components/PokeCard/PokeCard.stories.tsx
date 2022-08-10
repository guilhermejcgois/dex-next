import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PokeCard } from './PokeCard';

export default {
  title: 'Components/PokeCard',
  component: PokeCard,
} as ComponentMeta<typeof PokeCard>;

export const Bulbasaur: ComponentStory<typeof PokeCard> = (args) => (
  <PokeCard {...args} />
);
Bulbasaur.args = {
  pokemon: {
    name: "Bulbasaur",
    nat_dex_num: 1,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/1.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      front_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/1.png",
    },
  },
};
