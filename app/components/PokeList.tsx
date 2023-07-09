import { APIProps, PokeType } from '../pagination/page';

interface Props {
  data?: PokeType[];
}

const PokeList = ({ data }: Props) => {
  return (
    <>
      {data?.map((e) => (
        <>
          <div className="text-l text-center pt-5" key={e.name}>
            {e.name}
          </div>
        </>
      ))}
    </>
  );
};

export default PokeList;
