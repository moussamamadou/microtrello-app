import React, { useEffect, useState } from "react";
import { IListItem } from "../../Interface";
import TextareaAutosize from "react-textarea-autosize";
import X from "../../public/X.svg";
import DragIndicator from "../../public/DragIndicator.svg";

const ListItem = ({ list, setList, index }: IListItem) => {
  const [itemName, setItemName] = useState(list[index].name);
  const [itemChecked, setItemChecked] = useState(list[index].checked);

  const handleItemName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setItemName(e.target.value);
  };

  const handleItemCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemChecked(e.target.checked);
  };

  const deleteItem = () => {
    const newList = list.filter((item, i) => index !== i);
    setList(newList);
  };

  useEffect(() => {
    setList((list) => {
      const newList = [...list];
      newList[index].name = itemName;
      return newList;
    });
  }, [itemName]);

  useEffect(() => {
    setList((list) => {
      const newList = [...list];
      newList[index].checked = itemChecked;
      return newList;
    });
  }, [itemChecked]);

  return (
    <div className="flex gap-2 group border-2 border-transparent focus-within:border-blue-200 transition-colors duration-300  border-l-0 border-r-0">
      <div className="my-handle w-6 h-6 mt-[4.5px] -mr-1 text-transparent border-none group-hover:text-gray-500 transition-colors duration-300 hover:cursor-move">
        <DragIndicator />
      </div>
      <input
        type="checkbox"
        className="h-5 w-5 mt-[4.5px] checked:bg-gray-300 border-gray-100 checked:border-transparent transition-colors duration-300"
        checked={itemChecked}
        onChange={handleItemCheckbox}
      />
      <TextareaAutosize
        minRows={1}
        className="input bg-transparent text-base border-transparent p-0 focus:border-transparent"
        value={itemName}
        onChange={handleItemName}
      />
      <button
        type="button"
        className="w-7 h-7 mr-2 text-transparent border-solid border-2 border-transparent group-hover:text-gray-500 hover:border-gray-200 group-hover:text-gray-500transition-colors duration-300"
        onClick={deleteItem}
      >
        <X />
      </button>
    </div>
  );
};

export default ListItem;
