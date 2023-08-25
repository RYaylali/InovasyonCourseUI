import "./courselistpage.scss";
import Sidebar from "../../../component/admincomponent/sidebar/Sidebar";
import Navbar from "../../../component/admincomponent/navbar/Navbar";
import CourseList from "../../../component/admincomponent/courselist/CourseList";
import { useNavigate } from "react-router-dom";
/*import { useContext } from "react";*/
import { useEffect } from "react";
/*import withAuth from "../../withAuth";*/

/*import Maps from "../../../components/admincomponent/maps/Maps";*/

/*import { SidebarContext } from "../../../context/SidebarContext";*/
const CourseListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="homevisitor">
      {/*isSidebarVisible &&*/ <Sidebar />}
      <div className="homeContainervisitor">
        <Navbar />
        <CourseList />
      </div>
    </div>
  );
};

export default CourseListPage;
