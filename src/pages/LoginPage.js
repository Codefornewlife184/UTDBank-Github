import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { Container,Row } from "react-bootstrap";
const LoginPage = () => {
  return (
     <Container>
         <Row class="row">
        <div class="authentication-section">
              <div class="authentication-grid">
                <div class="authentication-item authentication-img-bg"></div>
                 <div class="authentication-item bg-white pl-15 pr-15">
                  <div class="authentication-user-panel">
                    <div class="authentication-user-header">
                    <a href="index.html"
                      ><img src="assets/images/logo.png" alt="logo"
                    /></a>
                    <h1>Welcome to UTD Bank</h1>
                  </div>
                <div class="authentication-user-body">
                  <div class="authentication-tab">
                       <div
                      class="authentication-tab-item authentication-tab-active"
                      data-authentcation-tab="1"
                      >
                      <Link to="/login">
                        <div class="authentication-tab-details-item authentication-tab-details-active">
                        <img src="assets/images/login.png" alt="icon" />Login</div>
                      </Link>
                      </div>
                      <div class="authentication-tab-item" data-authentcation-tab="2" >
                      <Link to="/register">
                       <div><img src="assets/images/register.png" alt="icon" />Register</div>
                      </Link>
                      </div>
                  </div>
                  <div class="authentication-tab-details">
                      <div
                      class="authentication-tab-details-item 
                      authentication-tab-details-active"
                      data-authentcation-details="1"
                      > 
                     <LoginForm />
                    </div>
                 </div>
                </div>
            </div>
            </div>
            <ToastContainer />
        </div>
      </div>
      </Row>
      </Container>
  );
};

export default LoginPage;