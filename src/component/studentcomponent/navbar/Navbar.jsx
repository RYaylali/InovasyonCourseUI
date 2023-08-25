import "./navbar.scss";

//import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
//import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
//import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
//import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
/*import ManagerService from "../../service/ManagerService";*/
import { useState, useEffect } from "react";

/*import withAuth from "../../withAuth";*/

const Navbar = () => {
  const token = localStorage.getItem("token");
  const [image, setImage] = useState("");
  /*useEffect(() => {
    // Axios için iptal tokeni oluştur
    const source = fetch.CancelToken.source();

    ManagerService.getImage(token, { cancelToken: source.token })
      .then((response) => {
        setImage(response.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          // istek iptal edildiyse, hata oluştuğunu kontrol eder
          console.log("Axios request cancelled");
        } else {
          console.log("Another error happened: ", error.message);
        }
      });

    // useEffect temizleme fonksiyonu
    return () => {
      source.cancel();
    };
  }, [token]);*/

  return (
    <div className="navbar">
      <div>
        {/* <MenuIcon className="icon menu" onClick={toggleSidebar}></MenuIcon> */}
      </div>

      <div className="wrapper">
        <div className="items">
          <div className="item">
            {/* <LanguageOutlinedIcon className="icon" /> */}
            English
          </div>
          <div className="item">
            {/* <FullscreenOutlinedIcon className="icon" /> */}
          </div>

          <div className="item">
            {/* <DarkModeOutlinedIcon className="icon" /> */}
          </div>
          <Link to="/managerprofile" style={{ textDecoration: "none" }}>
            <div className="item">
              <img
                src={
                  "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                className="avatar"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
