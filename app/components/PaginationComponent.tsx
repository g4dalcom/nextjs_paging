import { Dispatch } from 'react';

interface PaginationProps {
  total: number;
  page: number;
  limit: number;
  setPage: Dispatch<React.SetStateAction<number>>;
}

const PaginationComponent = ({
  total,
  limit,
  page,
  setPage,
}: PaginationProps) => {
  const naviSize = Math.ceil(total / limit);

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
        {Array(naviSize)
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
          disabled={page === naviSize}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default PaginationComponent;
