import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import Props, { IBoardData, IBoardDataContextValue } from "../../Interface";

const sampleData: IBoardData = {
  rows: {
    "row-1": {
      id: "row-1",
      cardData: {
        id: "row-1",
        title: "row-1",
        description: "",
        checkList: {
          list: [],
          listLength: 0,
          listChecked: 0,
        },
      },
    },
    "row-2": {
      id: "row-2",
      cardData: {
        id: "row-2",
        title: "row-2",
        description: "",
        checkList: {
          list: [],
          listLength: 0,
          listChecked: 0,
        },
      },
    },
    "row-3": {
      id: "row-3",
      cardData: {
        id: "row-3",
        title: "row-3",
        description: "",
        checkList: {
          list: [],
          listLength: 0,
          listChecked: 0,
        },
      },
    },
    "row-4": {
      id: "row-4",
      cardData: {
        id: "row-4",
        title: "row-4",
        description: "",
        checkList: {
          list: [],
          listLength: 0,
          listChecked: 0,
        },
      },
    },
    "row-5": {
      id: "row-5",
      cardData: {
        id: "row-5",
        title: "row-5",
        description: "",
        checkList: {
          list: [],
          listLength: 0,
          listChecked: 0,
        },
      },
    },
    "row-6": {
      id: "row-6",
      cardData: {
        id: "row-6",
        title: "row-6",
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
    "column-1": {
      id: "column-1",
      title: "To do",
      rowOrder: ["row-1", "row-2", "row-3", "row-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      rowOrder: ["row-5", "row-6"],
    },
  },
  columnOrder: ["column-1", "column-2"],
  increment: {
    rows: 6,
    columns: 2,
  },
};

const emptyData: IBoardData = {
  rows: {},
  columns: {},
  columnOrder: [],
  increment: {
    rows: 0,
    columns: 0,
  },
};

const Context = createContext({} as IBoardDataContextValue);

export default function BoardDataContext({ children }: Props) {
  const [data, setBoardData] = useState(emptyData);

  const valueData: IBoardDataContextValue = {
    data,
    setBoardData,
  };

  return <Context.Provider value={valueData}>{children}</Context.Provider>;
}

export const useBoardData = () => useContext(Context);
