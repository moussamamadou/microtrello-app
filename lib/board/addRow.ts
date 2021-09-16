import { IBoardData } from "../../Interface";

export const addRow = (
  data: IBoardData,
  setBoardData: React.Dispatch<React.SetStateAction<IBoardData>>,
  columnID: string,
  newColumnTitle: string
) => {
  const newRow = `row-${data.increment.rows + 1}`;
  const newIncrement = data.increment.rows + 1;
  const newData = {
    ...data,
    rows: {
      ...data.rows,
      [newRow]: {
        id: newRow,
        cardData: {
          id: newRow,
          title: newColumnTitle,
          description: "",
          checkList: {
            list: [],
            listLength: 0,
            listChecked: 0,
          },
        },
      },
    },
    columns: {
      ...data.columns,
      [columnID]: {
        ...data.columns[columnID],
        rowOrder: [...data.columns[columnID].rowOrder, newRow],
      },
    },
    increment: {
      ...data.increment,
      rows: newIncrement,
    },
  };

  setBoardData(newData);
};
