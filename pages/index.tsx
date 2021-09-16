import Board from "../components/Board";
export default function Home(): JSX.Element {
  return (
    <>
      <nav className="z-20 fixed w-full p-4 drop-shadow bg-white top-0 left-0">
        <h1 className="logo text-center p-1 cursor-default">µTrello</h1>
      </nav>
      <div className="flex-grow w-screen flex pt-20 flex-col text-gray-900 font-medium">
        <Board />
      </div>
    </>
  );
}
