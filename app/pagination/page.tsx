'use client';

import { useEffect, useState } from 'react';
import DataList from '../components/DataList';
import PaginationComponent from '../components/PaginationComponent';

export interface ItemsProps {
  Id: number;
  Name: string;
  Grade: string;
  Icon: string;
  BundleCount: number;
  TradeRemainCount: number;
  YDayAvgPrice: number;
  RecentPrice: number;
  CurrentMinPrice: number;
}

export interface FetchData {
  PageNo: number;
  PageSize: number;
  TotalCount: number;
  Items: ItemsProps[];
}

const Pagination = () => {
  /**
   * state: pokemon data list
   * page: current page
   * limit: The number of data to be displayed on one page
   * offset: Size between start and end points => fetchData.slice(offset, offset + limit)
   */
  const [fetchData, setFetchData] = useState<ItemsProps[]>([]);
  const [page, setPage] = useState(1);

  const limit = 10;
  const total = 50;
  const offset = (page - 1) * limit;
  const APIkey = process.env.NEXT_PUBLIC_LOSTARK_API_KEY;

  console.log('page = ', page);
  console.log('data = ', fetchData);

  useEffect(() => {
    fetch(`https://developer-lostark.game.onstove.com/markets/items`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${APIkey}`,
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        Sort: 'RECENT_PRICE',
        CategoryCode: 40000,
        CharacterClass: '',
        ItemTier: null,
        ItemGrade: '',
        ItemName: '',
        PageNo: page,
        SortCondition: 'ASC',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data.Items);
      });
  }, [page]);

  return (
    <section>
      <h2 className="text-3xl text-center text-orange-700 my-8">
        pagination page
      </h2>
      <div className="text-xl w-screen text-center text-blue-600 mb-8">
        LostArk Market!
      </div>
      <DataList data={fetchData} />
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
