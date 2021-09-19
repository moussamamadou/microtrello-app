export interface IListData {
  id: number;
  name: string;
  checked: boolean;
}
export interface ICheckListData {
  list?: Array<IListData>;
  listLength: number;
  listChecked: number;
}
export interface ICardData {
  id: string;
  title: string;
  description?: string;
  checkList: ICheckListData;
}
export interface IBoardData {
  id: number;
  name: string;
  rows: {
    [index: string]: {
      id: string;
      cardData: ICardData;
    };
  };
  columns: {
    [index: string]: {
      id: string;
      title: string;
      rowOrder: Array<string>;
    };
  };
  columnOrder: Array<string>;
  increment: {
    rows: number;
    columns: number;
  };
}

export interface IAllBoardData {
  id: number | undefined;
  name: string | undefined;
}

export interface IGlobalContextValue {
  visibleBoardId: number;
  setVisibleBoardId: React.Dispatch<React.SetStateAction<number>>;
  isShowingBoard: boolean;
  setIsShowingBoard: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IBoardDataContextValue {
  boardId: number;
  data: IBoardData;
  setBoardId: React.Dispatch<React.SetStateAction<number>>;
  setBoardData: React.Dispatch<React.SetStateAction<IBoardData>>;
}
export interface IBoardModalContextValue {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cardData: ICardData;
  setCardData: React.Dispatch<React.SetStateAction<ICardData>>;
}
