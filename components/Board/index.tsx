import { Droppable } from "react-beautiful-dnd";
import ColumnList from "../DnD/DnDStructure/ColumnList";
import ColumnInputButton from "../DnD/DnDElements/ColumnInputButton";
import BoardDataContext from "./BoardDataContext";
import DnDContext from "../DnD/DnDContext";
import Card from "../../components/Card";
import BoardModalContext from "./BoardModalContext";
import BoardModal from "./BoardModal";

export default function Board() {
  return (
    <BoardDataContext>
      <BoardModalContext>
        <>
          <BoardModal />
          <DnDContext>
            <div className="flex gap-1 w-full p-3 ">
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
                    <ColumnList />
                    {provided.placeholder}
                    <ColumnInputButton />
                  </div>
                )}
              </Droppable>
            </div>
          </DnDContext>
        </>
      </BoardModalContext>
    </BoardDataContext>
  );
}
