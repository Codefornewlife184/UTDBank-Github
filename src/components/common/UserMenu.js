import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "../../context";
import { loginLogout } from "../../context/user/userActions";

import { isUserManager, isUserEmployee } from "../../utils/auth";

import alertify from "alertifyjs";

import { DropdownButton, Dropdown } from "react-bootstrap";
import { FiUser } from "react-icons/fi";

const UserMenu = () => {
  const { userState, dispatchUser } = useContext();
  const { user, isUserLogin } = userState;
  const navigate = useNavigate();

  const handleLogout = () => {
    alertify.confirm(
      "Logout",
      "Are you sure want to logout?",
      () => {
        dispatchUser(loginLogout());
        localStorage.removeItem("token");
        navigate("/");
      },
      () => {
        console.log("canceled");
      }
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isUserLogin ? (


        <DropdownButton id="dropdown-basic-button" title={`${user.firstName} ${user.lastName}`} size="sm" align="start" drop="start">


          {isUserManager(user.roles) && (
            <>
              <Dropdown.Item as={Link} to="/AllTransfers" onClick={scrollToTop}>
                All Transfers
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/admin/search" onClick={scrollToTop}>
                Search User
              </Dropdown.Item>
              <Dropdown.Divider></Dropdown.Divider>

              {/*   <Dropdown.Item as={Link} to="/homepage">
                Authorization
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/homepage">
                Users
              </Dropdown.Item>

              <Dropdown.Item as={Link} to="/admin/accounts">
                Accounts Management
              </Dropdown.Item>

              <Dropdown.Divider></Dropdown.Divider> */}
            </>
          )}

          {isUserEmployee(user.roles) && (
            <>
              <Dropdown.Item
                as={Link}
                to="/employee/search"
                onClick={scrollToTop}
              >
                Search User
              </Dropdown.Item>
              <Dropdown.Divider></Dropdown.Divider>
            </>
          )}

          <Dropdown.Item as={Link} to="/profile" onClick={scrollToTop}>
            Profile
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/user/accounts" onClick={scrollToTop}>
            Accounts
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/user/newaccount" onClick={scrollToTop}>
            New Acount
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/CreateTransfer" onClick={scrollToTop}>
            Money Transfer
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/Transfers" onClick={scrollToTop}>
            Transfers
          </Dropdown.Item>

          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </DropdownButton>
      ) : (
        <div className="navbar-option">
          <div className="navbar-option-item">

            <Link
              to="/login"
              className="btn1 orange-gradient btn-with-image text-nowrap"
            >

              <i className="flaticon-login"></i>
              Sign Up / Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default UserMenu;
