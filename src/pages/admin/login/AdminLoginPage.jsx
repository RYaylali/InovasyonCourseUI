import "./adminloginpage.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userId = data.get("UserId");
    const password = data.get("Password");

    fetch("https://localhost:7271/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: data.get("UserId"),
        password: data.get("Password"),
      }),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Login Başarılı! Anasayfaya Yönlendiriliyorsunuz...", {
            autoClose: 2000,
          });
          return response.json();
        } else {
          throw new Error("Giriş başarısız");
        }
      })
      .then((data) => {
        setTimeout(() => {
          navigate("/adminhome");
        }, 3000);
      })
      .catch((error) => {
        toast.error("Oturum açma başarısız.Lütfen daha sonra deneyiniz...", {
          autoClose: 3000,
        });
        console.error(error);
      });
    console.log(userId);
    console.log(password);
  };

  return (
    <div className="engeneladmin">
      <ToastContainer />
      <div className="backgroundadmin">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="formadmin" onSubmit={handleSubmit}>
        <h3>Admin Login</h3>

        <label className="labeladmin" htmlFor="username">
          User Id
        </label>
        <input
          className="inputadmin"
          type="text"
          placeholder="User Id"
          id="UserId"
          name="UserId"
        />

        <label className="labeladmin" htmlFor="password">
          Password
        </label>
        <input
          className="inputadmin"
          type="password"
          placeholder="Password"
          id="Password"
          name="Password"
        />

        <button className="buttonadmin">Log In</button>
      </form>
    </div>
  );
};
export default AdminLoginPage;
