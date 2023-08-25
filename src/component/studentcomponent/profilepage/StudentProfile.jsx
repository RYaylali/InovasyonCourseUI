import { useEffect, useState } from "react";
import "./studentprofile.css";

const StudentProfile = () => {
  const userId = parseInt(localStorage.getItem("userId"));
  const [manager, setManager] = useState([
    {
      firstName: "",
      lastName: "",
      birthDate: "",
      password: "",
    },
  ]);
  const [cources, setCources] = useState([
    {
      courseName: "",
    },
  ]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://localhost:7271/api/Admin/StudentList"
      );
      const data = await response.json();
      data.forEach((item) => {
        if (item.userId === userId) {
          return setManager(item);
        } else {
          console.log("hata");
        }
      });
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  };
  const fetchData2 = async () => {
    try {
      const response = await fetch(
        "https://localhost:7271/api/Student/CoursesList"
      );
      const data = await response.json();
      console.log(data);
      data.forEach((item) => {
        if (item.userId === userId) {
          return setCources(item);
        } else {
          console.log("hata");
        }
      });
    } catch (error) {
      console.error("Veri çekme hatası2:", error);
    }
  };
  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("tr-TR", options);
  };

  const courses = [
    { id: 1, title: "React Fundamentals" },
    { id: 2, title: "JavaScript Basics" },
    { id: 3, title: "Node.js Essentials" },
    { id: 4, title: "CSS for Beginners" },
  ];

  return (
    <div className="user-profile">
      <div className="left-card">
        <div className="leftinfo-card">
          <div className="name-container">
            <div className="line">
              <span className="first-name">First Name</span>
              <span className="second-name">{manager.firstName}</span>
            </div>
            <hr />
            <div className="line">
              <span className="first-name">Last Name</span>
              <span className="second-name">{manager.lastName}</span>
            </div>
            <hr />
            <div className="line">
              <span className="first-name">Birth Date</span>
              <span className="second-name">
                {formatDate(manager.birthDate)}
              </span>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="right-card">
        <div className="name-container">
          <div className="line">
            <span className="first-name">Password</span>
            <span className="second-name">{manager.password}</span>
          </div>
          <hr />
          <div className="line">
            <span className="first-name">Course Name</span>
            <span className="second-name">
              {cources.map((course) => (
                <li key={course.courseId}>{course.courseName}</li>
              ))}
            </span>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default StudentProfile;
