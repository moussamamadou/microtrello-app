import { IGlobalContextValue } from "../Interface";

export const size = function (obj: Object) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

export const swap = (list: Array<string>, x: number, y: number) => {
  let z = list[y];
  list[y] = list[x];
  list[x] = z;

  return list;
};

export const initGlobalState = (
  visibleBoardId: number,
  setVisibleBoardId: React.Dispatch<React.SetStateAction<number>>,
  isShowingBoard: boolean,
  setIsShowingBoard: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (
    localStorage.getItem("globalState.visibleBoardId") &&
    localStorage.getItem("globalState.isShowingBoard")
  ) {
    setVisibleBoardId(
      Number(localStorage.getItem("globalState.visibleBoardId"))
    );
    setIsShowingBoard(
      JSON.parse(localStorage.getItem("globalState.isShowingBoard") || "")
    );
  } else {
    localStorage.setItem(
      "globalState.visibleBoardId",
      JSON.stringify(visibleBoardId)
    );
    localStorage.setItem(
      "globalState.isShowingBoard",
      JSON.stringify(isShowingBoard)
    );
  }
};

export const updateGlobalState = (
  visibleBoardId: number,
  isShowingBoard: boolean
) => {
  localStorage.setItem(
    "globalState.visibleBoardId",
    JSON.stringify(visibleBoardId)
  );
  localStorage.setItem(
    "globalState.isShowingBoard",
    JSON.stringify(isShowingBoard)
  );
};
