import React, { useEffect, useRef, useState } from "react";
import { updateBoardNameDB } from "../../lib";
import ChevronLeft from "../../public/ChevronLeft.svg";
import { useGlobal } from "../GlobalContext";
import { useBoardData } from "./BoardDataContext";

const BoardHeader = () => {
  const { setIsShowingBoard, isShowingBoard } = useGlobal();

  const { data, setBoardData } = useBoardData();

  const inputBoardRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [inputBoardVisible, setInputBoardVisible] = useState(true);
  const [inputBoardTitle, setInputBoardTitle] = useState(data.name);

  const updateBoardTitle = () => {
    if (inputBoardTitle) {
      const newData = {
        ...data,
        name: inputBoardTitle,
      };
      setBoardData(newData);
      updateBoardNameDB(inputBoardTitle, data.id);
    } else {
      setInputBoardTitle(data.name);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputBoardTitle(e.target.value);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setInputBoardVisible(!inputBoardVisible);
      updateBoardTitle();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setInputBoardVisible(!inputBoardVisible);
    updateBoardTitle();
  };

  useEffect(() => {
    if (!inputBoardVisible) {
      inputBoardRef.current?.focus();
    }
  }, [inputBoardVisible]);
  useEffect(() => {
    setInputBoardTitle(data.name);
  }, [data]);

  return (
    <div className=" container flex text-white text-opacity-80  text-lg  justify-between items-center py-5">
      <button
        className="flex justify-center items-center font-normal hover:text-indigo-500 transition-colors duration-300"
        onClick={() => setIsShowingBoard(!isShowingBoard)}
      >
        <ChevronLeft className="w-7 h-7  mr-2 mb-1" /> All Board
      </button>
      <div className="w-2/5">
        {inputBoardVisible ? (
          <div
            className=" h-14 p-2 text-title border-solid border-2 border-transparent text-white text-lg font-normal cursor-pointer"
            onClick={() => setInputBoardVisible(!inputBoardVisible)}
          >
            {data.name}
          </div>
        ) : (
          <input
            type="text"
            ref={inputBoardRef}
            className="input text-white  h-14 p-2 text-lg "
            value={inputBoardTitle}
            onChange={handleChange}
            onKeyDown={handleKey}
            onBlur={handleBlur}
            placeholder="Add title to list..."
          />
        )}
      </div>
    </div>
  );
};

export default BoardHeader;
