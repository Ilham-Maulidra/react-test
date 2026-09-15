import { Outlet } from "react-router-dom";
import { Sidebar } from "../uikit/Sidebar";
import { Header } from "../uikit/Header";

function Layout() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "1rem" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export { Layout };
