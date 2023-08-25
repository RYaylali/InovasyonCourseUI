import "./courselisthomepagestudent.scss";
import Sidebar from "../../../component/studentcomponent/sidebar/Sidebar";
import Navbar from "../../../component/studentcomponent/navbar/Navbar";
import CourseListHomeStudent from "../../../component/studentcomponent/courselist/CourseListHomeStudent";
import { useNavigate } from "react-router-dom";
/*import { useContext } from "react";*/
import { useEffect } from "react";
/*import withAuth from "../../withAuth";*/

/*import Maps from "../../../components/admincomponent/maps/Maps";*/

/*import { SidebarContext } from "../../../context/SidebarContext";*/
const CourseListHomePageStudent = () => {
  const navigate = useNavigate();

  return (
    <div className="homevisitor">
      {/*isSidebarVisible &&*/ <Sidebar />}
      <div className="homeContainervisitor">
        <Navbar />
        <CourseListHomeStudent />
      </div>
    </div>
  );
};

export default CourseListHomePageStudent;
