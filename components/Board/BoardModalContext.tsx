import React from "react";
import { createContext, useContext, useState } from "react";
import Props, { IBoardModalContextValue, ICardData } from "../../Interface";

const Context = createContext({} as IBoardModalContextValue);

export default function BoardModalContext({ children }: Props) {
  let [isOpen, setIsOpen] = useState(false);
  const [cardData, setCardData] = useState({} as ICardData);

  const valueData: IBoardModalContextValue = {
    isOpen,
    setIsOpen,
    cardData,
    setCardData,
  };

  return <Context.Provider value={valueData}>{children}</Context.Provider>;
}

export const useBoardModal = () => useContext(Context);
