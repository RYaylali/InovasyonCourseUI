import "./studentprofilepage.scss";
import Sidebar from "../../../component/studentcomponent/sidebar/Sidebar";
import Navbar from "../../../component/studentcomponent/navbar/Navbar";
import StudentProfile from "../../../component/studentcomponent/profilepage/StudentProfile";
import { useContext } from "react";
const StudentProfilePage = () => {
  /* const { isSidebarVisible } = useContext(SidebarContext);*/
  return (
    <div className="homeadmin">
      <Sidebar />
      <div className="homeContaineradmin">
        <Navbar />
        <StudentProfile />
      </div>
    </div>
  );
};

export default StudentProfilePage;
