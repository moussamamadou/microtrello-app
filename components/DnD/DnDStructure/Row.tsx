import React from "react";
import { IRow } from "../../../Interface";
import { Draggable } from "react-beautiful-dnd";
import RowHeader from "../DnDElements/RowHeader";

const Row = (props: IRow) => {
  return (
    <Draggable draggableId={props.row.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          aria-roledescription="Press space bar to lift the Row"
          className={`${snapshot.isDragging ? "border-blue-600 shadow-lg" : ""}
          flex flex-col gap-2 w-full p-3 rounded-lg bg-white mb-4
          border-2 border-solid border-blue-100 hover:border-blue-300 
          shadow hover:shadow-lg transition-colors duration-300`}
        >
          <div className="flex justify-between  items-center w-full gap-2">
            <RowHeader
              rowID={props.row.id}
              rowTitle={props.row.content}
              columnID={props.columnID}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Row;
