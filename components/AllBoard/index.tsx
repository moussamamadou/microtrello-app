import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { useGlobal } from "../GlobalContext";
import { IAllBoardData } from "../../Interface";
import { addNewBoardDB, getAllBoardDB, updateAllBoardDB } from "../../lib";
import Plus from "../../public/Plus.svg";
import Trash from "../../public/Trash.svg";

const AllBoard = () => {
  const { setIsShowingBoard, setVisibleBoardId } = useGlobal();

  const [allBoard, setAllBoard] = useState([] as Array<any>);
  const [newBoard, setNewBoard] = useState("");

  const openBoard = (
    e: React.MouseEvent<HTMLDivElement>,
    boardId: number | undefined
  ) => {
    console.log((e.target as HTMLElement).tagName);
    if ((e.target as HTMLElement).tagName !== "DIV") {
    } else {
      setIsShowingBoard(true);
      setVisibleBoardId(boardId || 0);
    }
  };

  const deleteItem = (index: number) => {
    const newList = allBoard.filter((item, i) => index !== i);
    setAllBoard(newList);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBoardID = await addNewBoardDB(newBoard);
    await getAllBoardDB(setAllBoard);
    setNewBoard("");
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setNewBoard("");
  };

  useEffect(() => {
    updateAllBoardDB(allBoard);
  }, [allBoard]);

  useEffect(() => {
    getAllBoardDB(setAllBoard);
  }, []);

  return (
    <div className="container">
      <div className="flex justify-between items-center py-5">
        <div className="">
          <h3 className="text-white text-3xl">Boards</h3>
          <p className="text-white text-opacity-60 text-lg font-normal">
            {allBoard.length === 0
              ? `No board`
              : `You have ${allBoard.length} board${
                  allBoard.length > 1 ? "s" : ""
                } in total.`}
          </p>
        </div>
        <div className="w-2/5">
          <form
            className="relative flex items-center rounded-lg "
            onSubmit={handleSubmit}
          >
            <div className="absolute top-[15px] left-1 text-indigo-500 ">
              <Plus className="w-6 h-6" />
            </div>
            <input
              type="text"
              className=" rounded-lg pl-8 pr-2 py-4 border-2 border-dashed placeholder-indigo-500 placeholder-opacity-50 border-indigo-500  bg-transparent
             secondary hover:border-solid transition-all duration-400 
            focus: focus:bg-secondary focus:border-solid 
            text-xl font-normal truncate w-full h-full text-white "
              placeholder="Create new board"
              onBlur={handleBlur}
              value={newBoard}
              onChange={(e) => setNewBoard(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="w-full h-full">
        {allBoard && allBoard.length > 0 ? (
          <ReactSortable
            animation={200}
            delay={2}
            ghostClass="sortable-ghost"
            list={allBoard}
            setList={setAllBoard}
            className="grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3 "
          >
            {allBoard &&
              allBoard.map((item, index) => (
                <div
                  key={item.id}
                  className=" relative flex items-center justify-between p-0 m-0 w-full bg-secondary text-white  rounded-lg 
                              border-solid border-2 border-transparent border-opacity-50 hover:border-indigo-500
                              shadow hover:shadow-lg transition-colors duration-300 cursor-pointer group"
                  onClick={(e) => openBoard(e, item.id)}
                >
                  {/* <div className="flex bg-blue-500 justify-center items-center w-full h-3"></div> */}
                  <h3 className="text-lg  truncate font-base p-4">
                    {item.name}
                  </h3>
                  <button
                    type="button"
                    className="delete-board w-8 h-8 mr-2 text-transparent border-solid border-2 border-transparent group-hover:text-gray-400 group-hover:hover:text-red-500 transition-colors duration-300"
                    onClick={() => deleteItem(index)}
                  >
                    <Trash className="delete-board" />
                  </button>
                </div>
              ))}
          </ReactSortable>
        ) : (
          <div className="flex h-52 w-full justify-center items-center">
            <p className="text-white text-opacity-90 text-3xl">
              No board. Create a new board first.{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBoard;
AllBoard;
