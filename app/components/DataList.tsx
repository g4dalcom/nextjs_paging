import { ItemsProps } from '../pagination/page';
import Image from 'next/image';

interface Props {
  data: ItemsProps[];
}

const DataList = ({ data }: Props) => {
  return (
    <>
      {data.map((e) => (
        <>
          <div
            key={e.Id}
            className="flex flex-col justify-center items-center border-solid"
          >
            <Image src={e.Icon} width={48} height={48} alt="item image"></Image>
            <div className="text-l text-center  ">{e.Name}</div>
          </div>
        </>
      ))}
    </>
  );
};

export default DataList;
