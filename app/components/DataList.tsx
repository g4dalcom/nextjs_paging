import Image from 'next/image';
import { ItemsProps } from './../types/shared';

interface Props {
  data: ItemsProps[];
  usage: string;
}

const DataList = ({ data, usage }: Props) => {
  const display = {
    flex: 'flex flex-col justify-center items-center',
    grid: 'grid grid-cols-2 justify-center items-center gap-16 my-auto',
  };

  const size = {
    sm: 48,
    lg: 124,
  };

  return (
    <>
      <div className={usage === 'pagination' ? display.flex : display.grid}>
        {data?.map((e) => (
          <div key={e.Id} className="flex flex-col justify-center items-center">
            <Image
              src={e.Icon}
              width={usage === 'pagination' ? size.sm : size.lg}
              height={usage === 'pagination' ? size.sm : size.lg}
              alt="item image"
            ></Image>
            <div className="text-l text-center  ">{e.Name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DataList;
