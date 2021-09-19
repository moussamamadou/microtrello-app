import React, { Fragment } from "react";
import { useBoardData } from "../../Board/BoardDataContext";

import { Menu, Transition } from "@headlessui/react";
import DotsHorizontal from "../../../public/DotsHorizontal.svg";
import ArrowNarrowLeft from "../../../public/ArrowNarrowLeft.svg";
import ArrowNarrowRight from "../../../public/ArrowNarrowRight.svg";
import Pencil from "../../../public/Pencil.svg";
import Trash from "../../../public/Trash.svg";
import { removeColumn, moveColumn } from "../../../lib";
import { IColumnDropDown } from "../../../Interface";

export const DropDownColumn = ({
  inputColumnVisible,
  setInputColumnVisible,
  inputColumnRef,
  columnID,
}: IColumnDropDown) => {
  const { data, setBoardData } = useBoardData();

  const handleRenameColumn = () => {
    setTimeout(() => {
      setInputColumnVisible(!inputColumnVisible);
      inputColumnRef.current?.focus();
    }, 150);
  };

  return (
    <Menu as="div" className="relative align-right">
      <Menu.Button className="menu-button">
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
        <Menu.Items className="menu-items">
          <Menu.Item>
            {({ active }) => (
              <button
                type="button"
                className="menu-item"
                onClick={handleRenameColumn}
              >
                <Pencil className="w-6 h-6 mr-2" /> Rename list
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                type="button"
                className="menu-item"
                onClick={() =>
                  moveColumn(data, setBoardData, columnID, "MOVE_RIGHT")
                }
              >
                <ArrowNarrowRight className="w-6 h-6 mr-2" /> Move to right
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                type="button"
                className="menu-item"
                onClick={() =>
                  moveColumn(data, setBoardData, columnID, "MOVE_LEFT")
                }
              >
                <ArrowNarrowLeft className="w-6 h-6 mr-2" /> Move to left
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                type="button"
                className="menu-item-red"
                onClick={() => removeColumn(data, setBoardData, columnID)}
              >
                <Trash className="w-6 h-6 mr-2" /> Delete list
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default DropDownColumn;
