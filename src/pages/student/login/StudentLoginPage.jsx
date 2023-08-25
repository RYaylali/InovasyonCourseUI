import "./studentloginpage.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentLoginPage = () => {
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
        localStorage.setItem("userId", data.userId);
        console.log(data);
        setTimeout(() => {
          navigate("/studenthome");
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
    <div className="engenel">
      <div className="container">
        <ToastContainer />
        <div className="abc">
          <h1 style={{ color: "hsl(218, 81%, 95%)" }}>
            The best offer <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>
              for your business
            </span>
          </h1>
        </div>
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleSubmit}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="User Id"
                  required
                  id="UserId"
                  label="Email Address"
                  name="UserId"
                  autoComplete="userId"
                  autoFocus
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  required
                  name="Password"
                  label="Password"
                  type="password"
                  id="Password"
                  autoComplete="current-password"
                />
              </div>
              <button className="button login__submit">
                <span className="button__text">Sign In</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentLoginPage;
