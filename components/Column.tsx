import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useData } from "../components/DataContext";
import RowList from "./RowList";
import { IColumn } from "../Interface";
import { addRow, removeColumn, moveColumn } from "../lib/rowColumnManipulation";

const Column = (props: IColumn) => {
  const { data, setData } = useData();

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className=" bg-white w-56 flex flex-col border-2 border-solid p-2 m-2"
        >
          <h1 {...provided.dragHandleProps} className="p-2">
            {props.column.title}
          </h1>

          <div className="flex justify-center w-full">
            <button
              className="border-2 h-8 px-2 w-1/3 bg-red-500 text-white"
              onClick={() => removeColumn(data, setData, props.column.id)}
            >
              ╳
            </button>
            <button
              className="border-2 h-8 px-2  w-1/3 bg-blue-500 text-white"
              onClick={() =>
                moveColumn(data, setData, props.column.id, "MOVE_RIGHT")
              }
            >
              ⇐
            </button>
            <button
              className="border-2 h-8 px-2 w-1/3 bg-blue-500 text-white"
              onClick={() =>
                moveColumn(data, setData, props.column.id, "MOVE_LEFT")
              }
            >
              ⇒
            </button>
          </div>
          <Droppable droppableId={props.column.id} type="Row">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`${
                  snapshot.isDraggingOver ? " bg-blue-200" : "bg-white"
                }
                p-2 transition-colors duration-200 flex-grow min-h-[100px] `}
              >
                <RowList rows={props.rows} columnId={props.column.id} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <button
            className="border-2 h-8 px-2 bg-green-500 text-white"
            onClick={() =>
              addRow(
                data,
                setData,
                provided.draggableProps["data-rbd-draggable-id"]
              )
            }
          >
            ✛ Add Card ✛
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
