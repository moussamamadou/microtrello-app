import React from "react";
import { IRow } from "../Interface";
import { Draggable } from "react-beautiful-dnd";
import { useData } from "./DataContext";
import { removeRow, moveRow } from "../lib/rowColumnManipulation";
const Row = (props: IRow) => {
  const { data, setData } = useData();

  return (
    <Draggable draggableId={props.row.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          aria-roledescription="Press space bar to lift the Row"
          className={`${snapshot.isDragging ? "bg-red-100" : "bg-white"}
          border-2 border-solid p-2 mb-2`}
        >
          {props.row.content}
          <div className="flex justify-center w-full">
            <button
              className="border-2 h-8 px-2 w-1/3 bg-red-500 text-white"
              onClick={() =>
                removeRow(data, setData, props.row.id, props.columnId)
              }
            >
              X
            </button>
            <button
              className="border-2 h-8 px-2 w-1/3 bg-blue-500 text-white"
              onClick={() =>
                moveRow(
                  data,
                  setData,
                  props.row.id,
                  props.columnId,
                  "MOVE_DOWN"
                )
              }
            >
              ⇓
            </button>
            <button
              className="border-2 h-8 px-2 w-1/3 bg-blue-500 text-white"
              onClick={() =>
                moveRow(data, setData, props.row.id, props.columnId, "MOVE_UP")
              }
            >
              ⇑
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Row;
