import React, { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { ICard, ICardData, IListData } from "../../Interface";
import { updateBoardData } from "../../lib";
import { useBoardData } from "../Board/BoardDataContext";
import CheckList from "../CheckList";

const Card = ({ cardData }: ICard) => {
  const cardDataRef = useRef(cardData as ICardData);

  const { data, setBoardData } = useBoardData();

  const [cardTitle, setCardTitle] = useState(cardDataRef.current.title);
  const [cardDescription, setCardDescription] = useState(
    cardDataRef.current.description
  );
  const [cardList, setList] = useState(
    cardDataRef.current.checkList?.list as IListData[]
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCardDescription(e.target.value);
  };

  useEffect(() => {
    if (Object.entries(cardDataRef.current).length !== 0) {
      let nbOfChecked = 0;
      if (cardList) {
        cardList.forEach((mylist) => {
          if (mylist.checked) nbOfChecked = nbOfChecked + 1;
        });
        cardDataRef.current.checkList.list = cardList;
        cardDataRef.current.checkList.listLength = cardList.length;
        cardDataRef.current.checkList.listChecked = nbOfChecked;

        updateBoardData(
          data,
          setBoardData,
          cardDataRef.current,
          cardDataRef.current.id
        );
      }
    }
  }, [cardList]);

  useEffect(() => {
    console.log(
      "🚀 ~ file: index.tsx ~ line 52 ~ useEffect ~ cardDataRef",
      cardDataRef.current
    );
    if (Object.entries(cardDataRef.current).length !== 0) {
      cardDataRef.current.title = cardTitle;
      cardDataRef.current.description = cardDescription;
      updateBoardData(
        data,
        setBoardData,
        cardDataRef.current,
        cardDataRef.current.id
      );
    }
  }, [cardTitle, cardDescription]);

  return (
    <div>
      <input
        type="text"
        className="input  px-6 border-transparent focus:border-indigo-500 focus:border-opacity-20 font-bold text-2xl border-l-0 border-r-0 border-t-0 rounded-none"
        placeholder="Add a title"
        value={cardTitle}
        onChange={handleTitleChange}
      />
      <TextareaAutosize
        minRows={5}
        className="input  px-6 border-transparent focus:border-indigo-500 focus:border-opacity-20
        10 text-base border-l-0 border-r-0 rounded-none"
        placeholder="Add more detail to this card"
        value={cardDescription}
        onChange={handleDescriptionChange}
      />
      <CheckList list={cardList} setList={setList} />
    </div>
  );
};

export default Card;
