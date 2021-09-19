import Dexie from "dexie";

export class MicroTrelloDatabase extends Dexie {
  // Declare implicit table properties.
  // (just to inform Typescript. Instanciated by Dexie in stores() method)
  board: Dexie.Table<IBoardTable, number>; // number = type of the primkey
  boardData: Dexie.Table<IBoardDataTable, number>; // number = type of the primkey
  //...other tables goes here...

  constructor() {
    super("MyAppDatabase");
    this.version(1).stores({
      board: "++id, name, index",
      boardData: "++id, boardId, data",
      //...other tables goes here...
    });
    // The following line is needed if your typescript
    // is compiled using babel instead of tsc:
    this.board = this.table("board");
    this.boardData = this.table("boardData");
  }
}

interface IBoardTable {
  id?: number;
  name?: string;
  index: number;
}

interface IBoardDataTable {
  id?: number;
  boardId: number;
  data?: string;
}

export var db = new MicroTrelloDatabase();
