import React, { useCallback, useEffect, useRef, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import TextareaAutosize from "react-textarea-autosize";
import ListItem from "./ListItem";
import { ICheckList } from "../../Interface";
import Plus from "../../public/Plus.svg";
const CheckList = ({ list, setList }: ICheckList) => {
  const [newItemName, setNewItemName] = useState("");

  const newItemNameRef =
    useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  const updateList = (newItemName: string) => {
    setList((list) => [
      ...list,
      { id: list.length + 1, name: newItemName, checked: false },
    ]);
  };

  const addNewItem = (newItemName: string) => {
    if (newItemName) {
      updateList(newItemName);
    }
    setNewItemName("");
  };

  const handleNewItemName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewItemName(e.target.value);
  };

  const onSubmitNewItem = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewItem(newItemName);
  };

  const handleNewItemBlur = () => {
    addNewItem(newItemName);
  };

  const handleNewItemKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNewItem(newItemName);
    }
  };

  return (
    <div>
      {list && (
        <ReactSortable
          animation={200}
          delay={2}
          handle=".my-handle"
          ghostClass="sortable-ghost"
          list={list}
          setList={setList}
        >
          {list &&
            list.map((item, index) => (
              <div key={item.id} className="">
                <ListItem list={list} setList={setList} index={index} />
              </div>
            ))}
        </ReactSortable>
      )}
      <form onSubmit={onSubmitNewItem}>
        <div className="flex px-5 py-1 gap-2 text-base roup border-2 border-transparent focus-within: transition-colors duration-300  border-l-0 border-r-0">
          <Plus className="w-6 h-6 mt-[2px] text-gray-400" />
          <TextareaAutosize
            minRows={1}
            className="input bg-transparent border-transparent p-0 focus:border-transparent"
            value={newItemName}
            onChange={handleNewItemName}
            onBlur={handleNewItemBlur}
            onKeyDown={handleNewItemKeyDown}
            ref={newItemNameRef}
            placeholder="Add checklist item ... "
          />
        </div>
      </form>
    </div>
  );
};

export default CheckList;
