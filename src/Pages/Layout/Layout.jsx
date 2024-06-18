import Header from "../../components/Header/Header.jsx"
import { Outlet } from "react-router-dom";

const Layout = ()=> {
  return (
    <div className="layout">
      <div className="navbar">
        <Header />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;