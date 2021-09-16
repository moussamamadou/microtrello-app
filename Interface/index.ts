type Props = {
  children?: JSX.Element;
};

export default Props;
export type {
  IBoardModalContextValue,
  IBoardData,
  IBoardDataContextValue,
  ICardData,
  ICheckListData,
  IListData,
} from "./DataInterface";
export type { IColumn, IRow, IRowList } from "./DnDStructureInterface";
export type { ICard, IListItem, ICheckList } from "./CardComponentInterface";
export type {
  IColumnHeader,
  IColumnDropDown,
  IRowHeader,
  IRowDropDown,
  IRowInputButton,
} from "./DnDComponentInterface";
