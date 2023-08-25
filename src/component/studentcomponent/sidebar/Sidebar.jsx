import "./sidebar.scss";
//import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

// import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";
/*import AdminService from "../../service/AdminService";*/
import { useEffect, useState, useContext } from "react";
//import Logout from "../logout/Logout";
//import ApartmentIcon from "@mui/icons-material/Apartment";
//import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
//import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
//import arasımorb from "../../../assets/logo/arasımorb.png";
const Sidebar = () => {
  const [admin, setAdmin] = useState({});
  const token = localStorage.getItem("token");
  /*useEffect(() => {
    AdminService.getAllAdminInfo(token).then((response) => {
      setAdmin((admin) => ({
        ...admin,
        ...response.data,
      }));
    });
  }, []);*/

  return (
    <div className="sidebaradmin">
      {/* <div className="top">
        <Link to="/visitorhome" style={{ textDecoration: "none" }}>
          <h4 className="logovisitor">HRGenius</h4>
        </Link>
      </div>
      <hr />*/}

      <div className="center">
        <div className="item">
          <Link to="/adminhome" style={{ textDecoration: "none" }}>
            {/* <img src={arasımorb} className="avatar" /> */}
          </Link>
        </div>
        <ul>
          <p className="titleadmin">STUDENT</p>

          <Link to="/studenthome/profile" style={{ textDecoration: "none" }}>
            <li>
              {/* <CalendarMonthOutlinedIcon className="iconadmin" /> */}
              <span className="spnadmin">Student Profile</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
