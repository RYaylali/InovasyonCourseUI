import "./studentadd.scss";
import Sidebar from "../../../component/admincomponent/sidebar/Sidebar";
import Navbar from "../../../component/admincomponent/navbar/Navbar";
import StudentAdd from "../../../component/admincomponent/studentadd/StudentAdd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
/*import NewEmployee from "../../components/newEmployee/NewEmployee";
import Tables from "../../components/table/Tables";
import BarCharts from "../../components/bar/BarCharts";
import AverageWork from "../../components/averagework/AverageWork";
import withAuth from "../../withAuth";
import PercentArea from "../../components/percentarea/PercentArea";*/
const StudentAddPage = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <StudentAdd />

        <div className="circ">
          {/* <div className="circ_left">
            <NewEmployee />
          </div> */}
          {/*<div className="circ_right">
            <NewEmployee />
            <BarCharts />
          </div>
        </div>
        <div className="charts">*/}
          {/* <NewEmployee /> */}
          {/*
          <div className="tablearea">
            <Tables />
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default StudentAddPage;
