import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import AdminLoginPage from "./pages/admin/login/AdminLoginPage";
import AdminHome from "./pages/admin/homepage/AdminHome";
import StudentAddPage from "./pages/admin/studentadd/StudentAddPage";
import StudentListPage from "./pages/admin/studentlistpage/StudentListPage";
import CourseListPage from "./pages/admin/courselistpage/CourseListPage";

import StudentLoginPage from "./pages/student/login/StudentLoginPage";
import CourseListHomePageStudent from "./pages/student/home/CourseListHomePageStudent";
import StudentProfilePage from "./pages/student/profilepage/StudentProfilePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/adminhome">
          <Route index element={<AdminHome />} />
          <Route path="/adminhome/studentadd" element={<StudentAddPage />} />
          <Route path="/adminhome/studentlist" element={<StudentListPage />} />
          <Route path="/adminhome/courselist" element={<CourseListPage />} />
        </Route>
        <Route path="/studentlogin" element={<StudentLoginPage />} />
        <Route path="/studenthome">
          <Route index element={<CourseListHomePageStudent />} />
          <Route path="/studenthome/profile" element={<StudentProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
