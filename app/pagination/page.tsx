'use client';

import { useEffect, useState } from 'react';

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

const PaginationComponent = ({}: PaginationProps) => {
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
      <div>This is pagination page</div>
      <div className="flex-col">
        {pokemons?.results.map((e) => (
          <>
            <div className="text-xl pt-5" key={e.name}>
              {e.name}
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default PaginationComponent;
