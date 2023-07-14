'use client';

import DataList from '../components/DataList';
import PaginationComponent from '../components/PaginationComponent';
import useFetch from '../hooks/useFetch';

const page = () => {
  const url = 'https://developer-lostark.game.onstove.com/markets/items';

  const [fetchData, page, setPage] = useFetch(url);

  const limit = 10;

  return (
    <section>
      <h2 className="text-3xl text-center text-orange-700 my-8">
        infinite scroll page
      </h2>
      <div className="text-xl w-screen text-center text-blue-600 mb-8">
        LostArk Market!
      </div>
      <DataList data={fetchData} />
    </section>
  );
};

export default page;
