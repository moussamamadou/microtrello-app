import { IBoardData, ICardData } from "../../Interface";

export const updateBoardData = (
  data: IBoardData,
  setBoardData: React.Dispatch<React.SetStateAction<IBoardData>>,
  cardData: ICardData,
  rowID: string
) => {
  const newData = {
    ...data,
    rows: {
      ...data.rows,
      [rowID]: {
        ...data.rows[rowID],
        cardData: cardData,
      },
    },
  };
  setBoardData(newData);
};
