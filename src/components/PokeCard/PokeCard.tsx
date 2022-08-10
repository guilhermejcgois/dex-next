import Image from 'next/image';
import * as Styled from './styles';
import { PokeCardProps } from "./types";

export const PokeCard = ({ pokemon }: PokeCardProps) => (
  <Styled.Card>
    <Styled.Heading>
      #{pokemon.nat_dex_num} - {pokemon.name}
    </Styled.Heading>
    <Styled.Sprite>
      <Image
        src={pokemon.sprites?.front_default ?? ""}
        alt={pokemon.name ?? ""}
        width="150"
        height="200"
      />
    </Styled.Sprite>
  </Styled.Card>
);
