import { Dispatch } from 'react';

interface PaginationProps {
  total: number;
  page: number;
  limit: number;
  setPage: Dispatch<React.SetStateAction<number>>;
}

const PaginationComponent = ({
  total,
  page,
  limit,
  setPage,
}: PaginationProps) => {
  const MAX_PAGENATOR = 5;
  console.log('p =', page);

  return (
    <section className="mt-8">
      <div className="flex justify-center gap-x-4">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={page === 1}
        >
          &lt;
        </button>
        {Array(MAX_PAGENATOR)
          .fill(0)
          .map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 && 'page'}
            >
              {i + 1}
            </button>
          ))}
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={page === MAX_PAGENATOR}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default PaginationComponent;
