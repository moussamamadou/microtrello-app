import React from "react";
import { IRow } from "../../../Interface";
import { Draggable } from "react-beautiful-dnd";
import RowHeader from "../DnDElements/RowHeader";
import { useBoardModal } from "../../Board/BoardModalContext";
import Checkmark from "../../../public/Checkmark.svg";

const Row = (props: IRow) => {
  const { setIsOpen, setCardData } = useBoardModal();

  return (
    <Draggable draggableId={props.row.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          aria-roledescription="Press space bar to lift the Row"
          className={`${
            snapshot.isDragging
              ? "shadow-lg border-indigo-500 border-opacity-100"
              : "border-transparent"
          }
          flex flex-col w-full rounded-lg bg-secondary mb-4
          border-2 border-transparent hover:border-indigo-500 hover:border-opacity-50
          shadow hover:shadow-lg transition-colors duration-300 `}
          onClick={(e) => {
            if (
              typeof (e.target as HTMLElement).className.includes !==
                "undefined" &&
              (e.target as HTMLElement).className?.includes("menu-item")
            ) {
            } else {
              setCardData(props.row.cardData);
              setIsOpen(true);
            }
          }}
        >
          <div className="flex justify-between  items-center w-full gap-2  p-2 group text-white">
            <RowHeader
              rowID={props.row.id}
              rowTitle={props.row.cardData.title}
              columnID={props.columnID}
            />
          </div>
          {props.row.cardData.description && (
            <p className="line-clamp-3 px-4 mb-3 text-gray-400">
              {props.row.cardData.description}
            </p>
          )}
          {props.row.cardData.checkList?.listLength !== 0 && (
            <div className="px-4 mb-3 text-gray-400 justify-start items-center flex">
              <Checkmark className="w-4 h-4 mr-2" />
              {`${props.row.cardData.checkList.listChecked} / ${props.row.cardData.checkList.listLength}`}
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default Row;
