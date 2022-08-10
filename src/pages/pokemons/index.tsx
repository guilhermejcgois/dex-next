import { PropsWithServerCache } from '@gqty/react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { prepareReactRender, useHydrateCache, useQuery } from '../../gqty';

type PageProps = PropsWithServerCache<{}>;
const POKES_PER_PAGE = 9;

const PokemonsPage = ({ cacheSnapshot }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
    shouldRefetch: false
  });

  const [limit, setLimit] = useState(POKES_PER_PAGE);
  const {allPokemon} = useQuery();

  return (
    <main>
      {allPokemon({limit})?.map(
        (pokemon) =>
          pokemon?.id && (
            <div key={pokemon?.id}>
              <h2>
                #{pokemon?.nat_dex_num} - {pokemon?.name}
              </h2>
              <Image
                src={pokemon?.sprites?.front_default ?? ""}
                alt={pokemon?.name ?? ""}
                width="150"
                height="200"
              />
            </div>
          )
      )}
      <button onClick={() => setLimit(() => limit + POKES_PER_PAGE)}>Load more</button>
    </main>
  );
}

export default PokemonsPage;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const { cacheSnapshot } = await prepareReactRender(
    <PokemonsPage />
  );

  return {
    props: {
      cacheSnapshot
    }
  };
};
