import { Outlet, Routes, Route } from "react-router";
import Menu from "./menu/Menu";
import Chapter from "./chapter/Chapter";
import styles from "./app.module.css";

function Layout() {
  return (
    <main className={styles.main}>{<Outlet />}</main>
  );
}


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Menu />} />
          <Route path="/chapter/:id" element={<Chapter />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
