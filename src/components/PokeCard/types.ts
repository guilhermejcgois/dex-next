import { Pokemon } from "../../gqty";

export type PokeCardProps = {
  pokemon: Pick<Pokemon, 'name'|'sprites'|'nat_dex_num'>;
};
