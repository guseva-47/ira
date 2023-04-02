import { Routes, Route } from "react-router";
import Menu from "./menu/Menu";
import Chapter from "./chapter/Chapter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/chapter/:id" element={<Chapter />} />
      </Routes>
    </>
  );
}

export default App;
