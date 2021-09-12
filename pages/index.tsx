import { Droppable } from "react-beautiful-dnd";
import { useData } from "../components/DataContext";
import ColumnList from "../components/ColumnList";
import { addColumn } from "../lib/rowColumnManipulation";
import { useEffect } from "react";

export default function Home(): JSX.Element {
  const { data, setData } = useData();

  useEffect(() => {
    // console.log("🚀 ~ file: index.tsx ~ line 9 ~ Home ~ data", data);
  }, [data]);

  return (
    <div className="p-3">
      <h1 className="text-3xl text-center p-1">Drag n Drop - Boiler Plate</h1>
      <h2 className="text-lg text-center p-1">
        Build With : React.js - Next.js - TypeScript - TailwindCSS - React
        Beautifull DnD
      </h2>
      <div className="flex w-full p-3">
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex"
            >
              {data.columnOrder.map((columnId, index) => {
                const column = data.columns[columnId];
                return (
                  <ColumnList
                    key={column.id}
                    column={column}
                    rowMap={data.rows}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <button
          className="border-2 h-8 px-2 my-2 bg-green-500 text-white"
          onClick={() => addColumn(data, setData)}
        >
          ✛ Add List ✛
        </button>
      </div>
    </div>
  );
}
