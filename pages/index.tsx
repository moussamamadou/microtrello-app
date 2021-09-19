import Board from "../components/Board";
import Head from "next/head";
import AllBoard from "../components/AllBoard";
import { Transition } from "@headlessui/react";
import { useGlobal } from "../components/GlobalContext";
import { useEffect, useState } from "react";
import { initGlobalState, updateGlobalState } from "../lib";

export default function Home(): JSX.Element {
  const {
    setVisibleBoardId,
    visibleBoardId,
    setIsShowingBoard,
    isShowingBoard,
  } = useGlobal();

  const [loadingGlobal, setloadingGlobal] = useState(false);
  const [first, setfirst] = useState(true);

  useEffect(() => {
    initGlobalState(
      visibleBoardId,
      setVisibleBoardId,
      isShowingBoard,
      setIsShowingBoard
    );
  }, []);

  useEffect(() => {
    if (first) {
      if (!isShowingBoard) setTimeout(() => setloadingGlobal(true), 300);
      else setloadingGlobal(true);
      setfirst(false);
    }
    updateGlobalState(visibleBoardId, isShowingBoard);
  }, [visibleBoardId, isShowingBoard]);

  return (
    <div className="">
      <Head>
        <title>µTrello</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Moussa Mamadou" />
        <meta name="copyright" content="Moussa Mamadou" />
        <meta
          name="description"
          content="A very tiny browser task management app for your personnal and private usage."
        />
      </Head>
      <nav className="container flex justify-between gap-20 py-5 ">
        <h1 className="logo text-center cursor-default bg-indigo-700 py-2 px-3 rounded-lg">
          µTrello
        </h1>
        <p className="italic text-white text-opacity-80 text-lg flex items-center font-normal ">
          A very tiny browser task management app for your personnal and private
          usage.
        </p>
      </nav>
      {loadingGlobal && (
        <div className="overflow-scroll h-screen w-screen relative flex-grow flex pb-0 flex-col text-gray-900 font-medium">
          <Transition show={!isShowingBoard}>
            {/* <Transition.Child
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-0"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          > */}
            <div className="absolute w-full h-full">
              <AllBoard />
            </div>
            {/* </Transition.Child> */}
          </Transition>
          <Transition show={isShowingBoard}>
            {/*    <Transition.Child
            enter="transition-opacity duration-0"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          > */}
            <div className="absolute w-full h-full">
              <Board />
            </div>
            {/* </Transition.Child>*/}
          </Transition>
        </div>
      )}
    </div>
  );
}
