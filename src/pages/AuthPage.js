import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { Tab, Tabs } from "react-bootstrap";
import Spacer from "../components/common/Spacer";
import { ToastContainer } from "react-toastify";

const AuthPage = () => {
  return (
   
     <div style={{ overflow: "visible", margin: "0" }}>
     

      <div className="authentication-section">
        <div className="authentication-grid">
          <div className="authentication-item authentication-img-bg"></div>
          <div className="authentication-item bg-red pl-5 pr-5">
            <div className="authentication-user-panel p-0 m-0">
              <div className="authentication-user-header p-0 m-0">
                <Link to="/">
                  <img src="/assets/images/logo.png" alt="logo" />
                </Link>
                <h1>Welcome to UTD Bank</h1>
                <Spacer size={50} />

                <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-0">
                  <Tab eventKey="login" title="Login">
                    <LoginForm />
                  </Tab>
                  <Tab eventKey="register" title="Register">
                    <RegisterForm />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <ToastContainer />
    </div>
  
  );
};

export default AuthPage;
