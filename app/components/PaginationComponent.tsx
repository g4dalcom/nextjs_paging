import { APIProps } from '../pagination/page';

interface PageProps {
  data?: APIProps;
}

const PaginationComponent = ({ data }: PageProps) => {
  return (
    <>
      {data?.results.map((e) => (
        <>
          <div className="text-l text-center pt-5" key={e.name}>
            {e.name}
          </div>
        </>
      ))}
    </>
  );
};

export default PaginationComponent;
