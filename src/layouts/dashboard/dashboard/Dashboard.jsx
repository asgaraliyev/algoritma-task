import "./Dashboard.scss";
import { Outlet } from "react-router-dom";
import Menu from "../../../components/common/menu/Menu";
function Dashboard() {
  return (
    <div id="dashboard-layout">
      <div className="flex flex-row">
        <Menu />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
