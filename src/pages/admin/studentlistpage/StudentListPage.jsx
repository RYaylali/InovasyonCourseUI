import "./studentlistpage.scss";
import Sidebar from "../../../component/admincomponent/sidebar/Sidebar";
import Navbar from "../../../component/admincomponent/navbar/Navbar";
import StudentList from "../../../component/admincomponent/studentlist/StudentList";
import { useNavigate } from "react-router-dom";
/*import { useContext } from "react";*/
import { useEffect } from "react";
/*import withAuth from "../../withAuth";*/

/*import Maps from "../../../components/admincomponent/maps/Maps";*/

/*import { SidebarContext } from "../../../context/SidebarContext";*/
const StudentListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="homevisitor">
      {/*isSidebarVisible &&*/ <Sidebar />}
      <div className="homeContainervisitor">
        <Navbar />
        <StudentList />
      </div>
    </div>
  );
};

export default StudentListPage;
