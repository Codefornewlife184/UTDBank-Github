import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "../context";
import { isUserEmployee, isUserManager, isUserCustomer } from "../utils/auth";

const PrivateRoute = ({ children, customer, employee, manager }) => {
  const { userState } = useContext();
  const { user } = userState;

  if (customer && !isUserCustomer(user.roles)) return <Navigate to="/" />;
  if (employee && !isUserEmployee(user.roles)) return <Navigate to="/" />;
  if (manager && !isUserManager(user.roles)) return <Navigate to="/" />;

  if (manager && !(isUserManager(user.roles) || isUserEmployee(user.roles)))
    return <Navigate to="/not-authorized" />;

  return children;
};

export default PrivateRoute;
