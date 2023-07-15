import { useEffect, useState } from 'react';
import { ItemsProps } from '../types/shared';

type FetchReturnType = [
  data: ItemsProps[],
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
];

const useFetch = (url: string, usage: string): FetchReturnType => {
  const [fetchData, setFetchData] = useState<ItemsProps[]>([]);
  const [page, setPage] = useState(1);
  const APIkey = process.env.NEXT_PUBLIC_LOSTARK_API_KEY;

  useEffect(() => {
    fetch(url, {
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
      .then((data) =>
        usage === 'pagination'
          ? setFetchData(data?.Items)
          : setFetchData([...fetchData, ...data?.Items]),
      );
  }, [page]);

  return [fetchData, page, setPage];
};

export default useFetch;
