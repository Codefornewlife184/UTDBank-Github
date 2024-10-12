import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import TopBar from "./components/common/TopBar";
import CustomRoutes from "./router/CustomRoutes";
import Footer from "./components/common/Footer";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { getUser } from "./api/user-service";
import { loginSuccess } from "./context/user/userActions";
import { useContext } from "./context";

const App = () => {
  const [loading, setLoading] = useState(true);
  const { dispatchUser } = useContext();

  const loadData = async () => {
    try {
      const respUser = await getUser();
      if (respUser.status !== 200) throw "An error occured whlie getting user";
      dispatchUser(loginSuccess(respUser.data));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  //if(loading) return(<LoadingPage/>)
  //else
  return (
    <BrowserRouter>
      <TopBar />
      <CustomRoutes />
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
