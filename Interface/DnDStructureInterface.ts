import { ICardData } from "./DataInterface";
export interface IColumn {
  column: {
    id: string;
    title: string;
    rowOrder: string[];
  };
  rows: Array<{
    id: string;
    cardData: ICardData;
  }>;
  index: number;
}

export interface IRow {
  key: string;
  row: {
    id: string;
    cardData: ICardData;
  };
  columnID: string;
  index: number;
}

export interface IRowList {
  rows: Array<{
    id: string;
    cardData: ICardData;
  }>;
  columnID: string;
}
