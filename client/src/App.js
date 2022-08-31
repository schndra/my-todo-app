import { Routes, Route } from "react-router-dom";
import AllTodo from "./pages/AllTodo";
import CompletedTodo from "./pages/CompletedTodo";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <>
      {/* <section className="bg-main  mt-8 mx-auto w-vw sm:w-fixed px-4 py-4">
        <h1 className="font-head text-cardHeadline text-center ">To-Do List</h1>
        <form>
          <div className="text-center my-4 ">
            <input
              type="text"
              className="w-3/4 border border-gray-300 rounded-md mr-3 px-2 py-1 font-body text-cardhead"
            />
            <button className="bg-primary font-body font-black  text-buttonTxt rounded-lg px-2 ">
              create
            </button>
          </div>
        </form>
      </section> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="completed" element={<CompletedTodo />} />
          <Route path="all" element={<AllTodo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
