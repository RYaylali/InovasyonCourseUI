import { useState } from "react";
import "./studentadd.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/*import wepik from "../../../assets/logo/wepik3.jpeg"*/

const StudentAdd = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    fetch("https://localhost:7271/api/Admin/CreateStudent", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        birthDate,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        /*response.status=== 200*/
        if (response.ok) {
          toast.success("Student Add Success...", { autoClose: 2000 });
          setTimeout(() => {
            /*navigate("/managerhome/personellist"); */
            window.location.reload();
          }, 4000);
        } else {
          toast.error("Student Add dont Success", { autoClose: 2000 });
          throw new Error(Error); // İstek başarısızsa hata fırlat
        }
      })
      .catch((error) => {
        toast.error(
          "Student Add başarısız.Lütfen daha sonra tekrar deneyiniz...",
          { autoClose: 2000 }
        );
        console.error(error);
      });
  };

  const handleCancel = () => {
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setPassword("");
  };

  return (
    <div
      className="containerupdateemployeeadd" /*style={{ backgroundImage: `url(${wepik})` }}*/
    >
      {/*<div className="baslikdiv">
      <h1 className="employeregisterbaslik">Employee Register</h1>
      </div>*/}

      <ToastContainer />
      <form className="updateprofileemployeeadd">
        <div className="genelupdateemployeeadd">
          <div className="leftemployeeadd">
            <label className="updatelabelemployeeadd" htmlFor="birthday">
              First Name:
            </label>
            <input
              type="text"
              className="updateinputemployeeadd"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label className="updatelabelemployeeadd" htmlFor="name">
              Birth Date:
            </label>
            <input
              className="updateinputemployeeadd"
              type="Date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
          </div>

          <div className="rightemployeeadd">
            <label className="updatelabelemployeeadd" htmlFor="name">
              Last Name:
            </label>
            <input
              className="updateinputemployeeadd"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label className="updatelabelemployeeadd" htmlFor="name">
              Password
            </label>
            <input
              className="updateinputemployeeadd"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="button-container">
          <button
            type="button"
            className="saveemployeeadd updatebuttonemployeeadd"
            onClick={handleSave}
          >
            ADD
          </button>
          <button
            type="button"
            className="cancelemployeeadd updatebuttonemployeeadd"
            onClick={handleCancel}
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};
export default StudentAdd;
