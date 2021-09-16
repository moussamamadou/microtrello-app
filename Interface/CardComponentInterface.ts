import { ICardData, IListData } from ".";
export interface ICard {
  cardData: ICardData;
}

export interface ICheckList {
  list: IListData[] | undefined;
  setList: React.Dispatch<React.SetStateAction<IListData[]>>;
}

export interface IListItem {
  list: IListData[];
  setList: React.Dispatch<React.SetStateAction<IListData[]>>;
  index: number;
}
