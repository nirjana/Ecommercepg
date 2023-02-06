import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { authService } from "../authentication/authentication";
import img from "../image/avif.jpg"
import { useParams } from "react-router-dom";

export const Navbar = () => {
   const { id } = useParams();
    const cartCount =useSelector(state => {
        console.log("this is nav state",state.cart.count) 
        return state.cart.count})
        const [currentUser, setCurrentUser] = useState(undefined);
  console.log("currenttt",currentUser);



  useEffect(() => {
    const user = authService.getCurrentUser();
    console.log("userla",user)

    if (user) {
      setCurrentUser(user.currentUser);
    }
  }, []);

  const logOut = () => {
    authService.logout();
    window.location.reload();
  };  



    const [users, setUsers] = useState();


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("this", res);
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

    return (
      <>
        <div className="nav flex flex-wrap justify-between bg-[#e8e8e8]">
          <div className="flex justify-start inline-block">
            <Link to="/">
              <img
                src={img}
                alt="hero img"
                className="h-[70px] w-[70px] pt-[5px]"
              />
            </Link>
          </div>

          <ul className="inline-block flex text-grey justify-end py-[20px] items-center">
            <li className="p-[10px] hover:bg-[orange] ">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="p-[10px] hover:bg-[orange] ">
              {" "}
              <Link to="/">Contact</Link>
            </li>
            <li className="p-[10px] hover:bg-[orange] ">
              {" "}
              <Link to="/products"> Our Products </Link>
            </li>
            {currentUser ? (
              currentUser === "user" ? (
                <>
                  <Link to="/cart">
                    <li className="p-[10px] hover:bg-[orange] ">
                      {" "}
                      <Link to="/cart"> Cart({cartCount}) </Link>
                    </li>
                  </Link>
                  <Link to="/login">
                    <li
                      className="p-[10px] hover:bg-[orange] "
                      onClick={logOut}
                    >
                      {" "}
                      Logout{" "}
                    </li>
                  </Link>
                
                 
                   
                       
                   
                    {" "}
               
                </>
              ) : (
                <>
                  <Link to="/dashboard">
                    <li className="p-[10px] hover:bg-[orange] "> Dashboard </li>
                  </Link>
                  <Link to="/login">
                    <li
                      onClick={logOut}
                      className="p-[10px] hover:bg-[orange] "
                    >
                      {" "}
                      Logout{" "}
                    </li>
                  </Link>
                </>
              )
            ) : (
              <>
                <div className="dropdown">
                  <li className="last small-content dropbtn">
                    Sign Up
                    <div className="dropdown-content">
                      <Link to="/register" className="hover:bg-[orange] ">
                        Admin{" "}
                      </Link>
                      <Link to="/userRegister" className="hover:bg-[orange] ">
                        Customer{" "}
                      </Link>
                    </div>
                  </li>
                </div>

                <div className="dropdown">
                  <li className="last small-content dropbtn">
                    Login
                    <div className="dropdown-content">
                      <Link to="/login">Admin </Link>
                      <Link to="/userLogin">Customer </Link>
                    </div>
                  </li>
                </div>
              </>
            )}
          </ul>
        </div>
      </>
    );
}