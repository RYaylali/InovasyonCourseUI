import "./courselist.css";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
const CourseList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [editedStudent, setEditedStudent] = useState({
    userId: null,
    firstName: "",
    lastName: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = (student) => {
    setEditedStudent(student);
    setIsModalOpen(true);
  };

  // Düzenlemeyi kaydetmek için kullanılan fonksiyon
  const saveEditedStudent = async () => {
    try {
      fetch("https://localhost:7271/api/Admin/UpdateStudent", {
        method: "PUT",
        body: JSON.stringify({
          userId: editedStudent.userId,
          firstName: editedStudent.firstName,
          lastName: editedStudent.lastName,
          password: editedStudent.password,
          birthDate: editedStudent.birthDate,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        console.log(editedStudent);
        if (response.ok) {
          toast.success("Düzenleme işlemi başarıyla gerçekleşti.", {
            autoClose: 2000,
          });
          closeModal();
          fetchData(); // Verileri güncellemek için
        } else {
          toast.error("Düzenleme işlemi başarısız oldu.", { autoClose: 2000 });
        }
      });
    } catch (error) {
      console.error("Düzenleme hatası:", error);
    }
  };

  // Backend'den verileri fetch etmek için kullanılacak fonksiyon
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://localhost:7271/api/Admin/CoursesList"
      ); // Backend URL'nizi buraya ekleyin
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  };

  // Sayfa yüklendiğinde verileri fetch etmek için useEffect kullanıyoruz
  useEffect(() => {
    fetchData();
  }, []);

  const handleReject = async (userId) => {
    try {
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        `https://localhost:7271/api/Admin/${userId}`,
        requestOptions
      );
      toast.info("Silme işlemi başarıyla gerçekleşmiştir...", {
        autoClose: 2000,
      });
      setTimeout(() => {
        fetchData();
      }, 4000);
    } catch (error) {
      toast.error(
        "Silme işlemi başarısız. Lütfen daha sonra tekrar deneyiniz...",
        { autoClose: 2000 }
      );
      console.error("Silme hatası:", error);
    }
  };

  // Tarihi belirli bir formata dönüştüren fonksiyon
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("tr-TR", options);
  };

  return (
    <div className="avansgenel">
      <ToastContainer />
      {Array.isArray(data) && data.length > 0 ? (
        <>
          <p className="avansdbaslik">Cource List</p>
          <div className="tableavans">
            <div className="table-headeravans">
              <div className="indexx">Index</div>
              <div className="columnavansname">Course Code</div>
              <div className="columnavansname">Course Name</div>
            </div>
            <div className="table-bodyavans">
              {data.map((item, index) => (
                <div key={index} className="rowavans">
                  <div className="indexx">{index + 1 + "-)"}</div>
                  <div className="columnavansname">{item.courseId}</div>
                  <div className="columnavansname">{item.courseName}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="avansddbaslik">Sistemde Öğrenci bulunamamıştır.</p>
      )}
    </div>
  );
};
export default CourseList;
