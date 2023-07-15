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
