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
   * offset: Size between start and end points
   */
  const [fetchData, setFetchData] = useState<ItemsProps[]>([]);
  const [page, setPage] = useState(1);

  const total = 50;
  const limit = 10;
  const offset = (page - 1) * limit;
  const APIkey =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyNzgyNjYifQ.RJSMi2mJ4yMon_VwDCB2fxjp6ZD9Z7s9rk61Ld2hte1vyrMBg_4f7jpE3MGK5YtCgnWjGbUBBSCX9gsQdcyFTx8O23Nf8PK2AkYSgZrL_keV9Sl109MQ37x8EiA6gJbhhzPKcws4bNuD3--R1ow43gu2ougQp1B36M0f-to-XJ3Bi5nt5RjwNDZku1MDp8uZ-Zdk3QGFU1Gre7wNZpa68tti60JOV1Ci1XA_LYJ3iAle8v23_KbZgHDILLkEitvijUuBayVv-gSDifMh982yelB1SFRY9pJ3GDWrtmU_DhgZimcA5uRRES6C7NBC9-mTRcbfmF9s7h_-2GqH1TQHRw';

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
        This is pagination page
      </h2>
      <div className="text-xl w-screen text-center text-blue-600">
        LostArk Market!
      </div>
      <DataList data={fetchData.slice(0, limit)} />
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
