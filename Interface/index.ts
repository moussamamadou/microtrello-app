type Props = {
  children?: JSX.Element;
};
export default Props;
export { db, MicroTrelloDatabase } from "./MicroTrelloDatabase";
export type {
  IGlobalContextValue,
  IBoardModalContextValue,
  IBoardData,
  IBoardDataContextValue,
  ICardData,
  ICheckListData,
  IListData,
  IAllBoardData,
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
