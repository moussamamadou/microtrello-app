import React, { Fragment } from "react";
import { useBoardData } from "../../Board/BoardDataContext";

import { Menu, Transition } from "@headlessui/react";
import { removeRow, moveRow } from "../../../lib";
import { IRowDropDown } from "../../../Interface";

import DotsHorizontal from "../../../public/DotsHorizontal.svg";
import ArrowNarrowUp from "../../../public/ArrowNarrowUp.svg";
import ArrowNarrowDown from "../../../public/ArrowNarrowDown.svg";
import Pencil from "../../../public/Pencil.svg";
import Trash from "../../../public/Trash.svg";
import Eye from "../../../public/Eye.svg";
import { useBoardModal } from "../../Board/BoardModalContext";

export const DropDownRow = ({
  inputRowVisible,
  setInputRowVisible,
  inputRowRef,
  rowID,
  columnID,
}: IRowDropDown) => {
  const { data, setBoardData } = useBoardData();

  const { setIsOpen, setCardData } = useBoardModal();

  const handleRenameRow = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setTimeout(() => {
      setInputRowVisible(!inputRowVisible);
      inputRowRef.current?.focus();
    }, 150);
  };

  return (
    <Menu as="div" className="relative flex-col align-right bg-white">
      <Menu.Button className="z-50 text-transparent group-hover:text-black border-2 bg-white border-transparent hover:border-blue-200 rounded-sm w-10 h-10 justify-center align-center transition-colors duration-300">
        <DotsHorizontal />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 d ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="z-10 absolute right-0 w-56 mt-1 p-2 origin-top-right bg-white border-gray-100 border-2 rounded-sm filter drop-shadow focus:outline-none focus-visible:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                type="button"
                className="menu-item flex items-center relative font-medium p-2 w-full rounded-sm hover:bg-blue-50 hover:text-blue-400 transition-colors duration-300"
                onClick={(e) => handleRenameRow(e)}
              >
                <Pencil className="w-5 h-5 mr-2" /> Rename card
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                type="button"
                className="menu-item flex items-center relative font-medium p-2 w-full rounded-sm hover:bg-blue-50 hover:text-blue-400 transition-colors duration-300"
                onClick={() => {
                  setCardData(data.rows[rowID].cardData);
                  setIsOpen(true);
                }}
              >
                <Eye className="w-5 h-5 mr-2" /> View Details
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                type="button"
                className="menu-item flex items-center relative font-medium p-2 w-full rounded-sm hover:bg-blue-50 hover:text-blue-400 transition-colors duration-300"
                onClick={() => {
                  moveRow(data, setBoardData, rowID, columnID, "MOVE_UP");
                }}
              >
                <ArrowNarrowUp className="w-6 h-6 mr-2" /> Move Up
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                type="button"
                className="menu-item flex items-center relative font-medium p-2 w-full rounded-sm hover:bg-blue-50 hover:text-blue-400 transition-colors duration-300"
                onClick={() =>
                  moveRow(data, setBoardData, rowID, columnID, "MOVE_DOWN")
                }
              >
                <ArrowNarrowDown className="w-6 h-6 mr-2" /> Move Down
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                type="button"
                className="menu-item flex items-center relative font-medium p-2 w-full rounded-sm  text-red-400 hover:bg-red-50 hover:text-red-400 transition-colors duration-300"
                onClick={() => removeRow(data, setBoardData, rowID, columnID)}
              >
                <Trash className="w-6 h-6 mr-2" /> Delete card
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default DropDownRow;
