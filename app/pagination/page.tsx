'use client';

import { useEffect, useState } from 'react';
import PokeList from '../components/PokeList';
import PaginationComponent from '../components/PaginationComponent';

export interface PokeType {
  name: string;
  url: string;
}

export interface APIProps {
  count: number;
  next?: string;
  previous?: string;
  results: PokeType[];
}

const Pagination = () => {
  /**
   * state: pokemon data list
   * page: current page
   * limit: The number of data to be displayed on one page
   * offset: Size between start and end points
   */
  const [pokemons, setPokemons] = useState<APIProps>();
  const [page, setPage] = useState(0);
  const limit = 10;
  const offset = (page - 1) * limit;
  const total = 50;
  const curOffset = limit * page + 1;

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${curOffset}`,
    )
      .then((res) => res.json())
      .then((data) => setPokemons(data));
  }, [page]);

  const pokeData = (data: APIProps | undefined) => {
    if (data) {
      const result = data.results.slice(offset, offset + limit);

      return result;
    }
  };

  return (
    <section>
      <h2 className="text-3xl text-center text-orange-700 my-8">
        This is pagination page
      </h2>
      <div className="text-xl w-screen text-center text-blue-600">
        포켓몬 도감!
      </div>
      <PokeList data={pokeData(pokemons)} />
      <PaginationComponent
        total={total}
        page={page}
        limit={limit}
        setPage={setPage}
      />
    </section>
  );
};

export default Pagination;
