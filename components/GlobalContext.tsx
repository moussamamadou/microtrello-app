import React from "react";
import { createContext, useContext, useState } from "react";
import Props, { IGlobalContextValue } from "../Interface";

const Context = createContext({} as IGlobalContextValue);

export default function GlobalContext({ children }: Props) {
  const [isShowingBoard, setIsShowingBoard] = useState(false);
  const [visibleBoardId, setVisibleBoardId] = useState(0);

  const valueData: IGlobalContextValue = {
    isShowingBoard,
    setIsShowingBoard,
    visibleBoardId,
    setVisibleBoardId,
  };

  return <Context.Provider value={valueData}>{children}</Context.Provider>;
}

export const useGlobal = () => useContext(Context);
