'use client';

import { useState, useEffect, SetStateAction } from 'react';
import DataList from '../components/DataList';
import useFetch from '../hooks/useFetch';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const InfiniteScroll = () => {
  const url = 'https://developer-lostark.game.onstove.com/markets/items';

  const [fetchData, page, setPage] = useFetch(url, 'infinite');
  const [observe, setObserve] = useState(false);

  console.log(fetchData);

  const pageHandler = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    pageHandler();
    setObserve(false);
  }, [observe]);

  const setObserveTarget: React.Dispatch<SetStateAction<any>> =
    useIntersectionObserver(() => {
      setObserve(true);
    });

  return (
    <section>
      <h2 className="text-3xl text-center text-orange-700 my-8">
        infinite scroll page
      </h2>
      <DataList data={fetchData} usage={'infinite'} />
      <div
        ref={setObserveTarget}
        style={{ backgroundColor: 'blue', padding: '10px' }}
      />
    </section>
  );
};

export default InfiniteScroll;
