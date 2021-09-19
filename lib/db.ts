import { db, IAllBoardData, IBoardData } from "../Interface";

export const addNewBoardDB = async (newBoard: string) => {
  const board = await db.board;
  const boardData = await db.boardData;

  const newBoardId = await board
    .add({ name: newBoard, index: 0 })
    .then((id) => id);

  const numberBoard = await board.count();

  console.log(numberBoard);

  await board
    .where("id")
    .equals(newBoardId)
    .modify({ index: numberBoard - 1 });

  const emptyData: IBoardData = {
    id: newBoardId,
    name: newBoard,
    rows: {},
    columns: {},
    columnOrder: [],
    increment: {
      rows: 0,
      columns: 0,
    },
  };

  await boardData.add({
    boardId: newBoardId,
    data: JSON.stringify(emptyData),
  });
};

export const updateAllBoardDB = async (allBoard: Array<IAllBoardData>) => {
  const board = await db.board;
  allBoard.forEach((res, index) => {
    board
      .where("id")
      .equals(res.id || 0)
      .modify({ index: index });
  });
};

export const deleteBoardDB = async (index: number, boardId: number) => {
  const board = await db.board;
  board.where("index").equals(index).delete();
  const boardData = await db.boardData;
  await boardData.where("id").equals(boardId).delete();
};

export const getAllBoardDB = async (
  setAllBoard: React.Dispatch<React.SetStateAction<Array<any>>>
) => {
  const board = await db.board;
  board.toArray().then((resBoard) => {
    if (resBoard.length !== 0) {
      let tempBoard: Array<IAllBoardData> = [];
      resBoard.forEach((res) => {
        tempBoard[res.index] = {
          name: res.name,
          id: res.id,
        };
      });
      setAllBoard(tempBoard);
    }
  });
};

export const updateBoardDataDB = async (boardId: number, data: IBoardData) => {
  const boardData = await db.boardData;
  await boardData
    .where("id")
    .equals(boardId)
    .modify({ data: JSON.stringify(data) });
};

export const getBoardDataDB = async (
  setBoardData: React.Dispatch<React.SetStateAction<IBoardData>>,
  setBoardId: React.Dispatch<React.SetStateAction<number>>,
  boardId: number
) => {
  const boardData = await db.boardData;
  const board = await boardData
    .where("id")
    .equals(boardId)
    .toArray((res) => res[0]);
  setBoardData(JSON.parse(board.data || ""));
  setBoardId(board.id || 0);
};

export const updateBoardNameDB = async (
  newBoardName: string,
  boardId: number
) => {
  console.log("🚀 ~ file: db.ts ~ line 88 ~ boardId", boardId);
  console.log("🚀 ~ file: db.ts ~ line 88 ~ newBoardName", newBoardName);

  const board = await db.board;

  await board.where("id").equals(boardId).modify({ name: newBoardName });
};
