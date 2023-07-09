'use client';

import { useEffect, useState } from 'react';
import PaginationComponent from '../components/PaginationComponent';

interface PokeType {
  name: string;
  url: string;
}

interface APIProps {
  count: number;
  next: string;
  previous: string;
  results: PokeType[];
}

interface PaginationProps {}

const Pagination = ({}: PaginationProps) => {
  const [pokemons, setPokemons] = useState<APIProps>();
  const [page, setPage] = useState(10);
  console.log(pokemons);

  const getPokeList = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`)
      .then((res) => res.json())
      .then((data) => setPokemons(data));
  };

  useEffect(() => {
    getPokeList();
  }, []);

  return (
    <section>
      <h2 className="text-3xl text-center text-orange-700 my-8">
        This is pagination page
      </h2>
      <div className="text-xl w-screen text-center text-blue-600">
        포켓몬 도감!
      </div>
      <PaginationComponent data={pokemons} />
    </section>
  );
};

export default Pagination;
