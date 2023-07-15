'use client';

import DataList from '../components/DataList';
import PaginationComponent from '../components/PaginationComponent';
import useFetch from '../hooks/useFetch';

const Pagination = () => {
  /**
   * state: data list
   * page: current page
   * limit: The number of data to be displayed on one page
   * offset: Size between start and end points => fetchData.slice(offset, offset + limit)
   */
  const url = 'https://developer-lostark.game.onstove.com/markets/items';

  const [fetchData, page, setPage] = useFetch(url, 'pagination');

  const limit = 10;
  const total = 50;
  const offset = (page - 1) * limit;

  return (
    <section>
      <h2 className="text-3xl text-center text-orange-700 my-8">
        pagination page
      </h2>
      <DataList data={fetchData} usage={'pagination'} />
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
