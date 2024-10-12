import React from "react";
import AboutPage from "../pages/AboutPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import FaqsPage from "../pages/FaqsPage";
import ServicesPage from "../pages/ServicesPage";
import ForgetPassword from "../pages/ForgetPassword";
import HomePage from "../pages/HomePage";
import PricingPage from "../pages/PricingPage";
import TermsConditionsPage from "../pages/TermsConditionsPage";
import ContactUsPage from "../pages/ContactUsPage";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "../pages/user/ProfilePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import UsersNewPage from "../pages/admin/UsersNewPage";
import UsersPage from "../pages/admin/UsersPage";
import UserEditPage from "../pages/admin/UserEditPage";
import CreateTransferPage from "../pages/user/CreateTransferPage";
import TransferPage from "../pages/user/TransferPage";
import TransfersPage from "../pages/admin/TransferPage";
import TransferDetailPage from "../pages/user/TransferDetailPage";
import AccountsPage from "../pages/admin/AccountsPage";
import NewAccountPage from "../pages/user/NewAccountPage";
import AccountDetailPage from "../pages/user/AccountDetailPage";
import AccountEditPage from "../pages/user/AccountEditPage";
import AllUsersPage from "../pages/admin/AllUsersPage";
import AccountsByUserPage from "../pages/admin/AccountsByUserPage";
import AccountActivitiesPage from "../pages/admin/AccountActivitiesPage";
import SearchUserPage from "../pages/admin/SearchUserPage";
import SearchUserPageEmployee from "../pages/employee/SearchUserPageEmployee";
import UsersPageEmployee from "../pages/employee/UsersPageEmployee";
import UserEditPageEmployee from "../pages/employee/UserEditPageEmployee";
import AdminNewAccountPage from "../pages/admin/AdminNewAccountPage";



const CustomRoutes = () => {
  return (
    <Routes>

      <Route path="/transfer/:accountNo/accountNo/auth" element={<AccountActivitiesPage />} />
      <Route path="/admin/user-accounts/:userId/auth" element={<AccountsByUserPage />} />

      <Route path="/admin/allUsers" element={<AllUsersPage />} />
      <Route path="/admin/users" element={<UsersPage />} />
      <Route path="/admin/users/new" element={<UsersNewPage />} />

      <Route
        path="/AllTransfers"
        element={
          <PrivateRoute admin={true}>
            <TransfersPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/search"
        element={
          <PrivateRoute admin={true}>
            <SearchUserPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/newaccount"
        element={
          <PrivateRoute admin={true}>
            <AdminNewAccountPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <PrivateRoute admin={true}>
            <SearchUserPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/users/new"
        element={
          <PrivateRoute admin={true}>
            <UsersNewPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/users/:userId"
        element={
          <PrivateRoute admin={true}>
            <UserEditPage />
          </PrivateRoute>
        }
      />
 

      <Route
        path="/employee/search"
        element={
          <PrivateRoute admin={true}>
            <SearchUserPageEmployee />
          </PrivateRoute>
        }
      />

      <Route
        path="/employee/users"
        element={
          <PrivateRoute admin={true}>
            <UsersPageEmployee />
          </PrivateRoute>
        }
      />
      <Route
        path="/employee/users/:userId"
        element={
          <PrivateRoute admin={true}>
            <UserEditPageEmployee />
          </PrivateRoute>
        }
      />

      <Route
        path="/user/accounts"
        element={
          <PrivateRoute>
            <AccountsPage />
          </PrivateRoute>
        }
      />
   <Route
        path="/account/:accountNo"
        element={
          <PrivateRoute>
            <AccountDetailPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/user/newaccount"
        element={
          <PrivateRoute>
            <NewAccountPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/accountedit/:accountNo"
        element={
          <PrivateRoute>
            <AccountEditPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/Transfer/:id"
        element={
          <PrivateRoute>
            <TransferDetailPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/CreateTransfer/:accountNo/:currencyCode"
        element={
          <PrivateRoute>
            <CreateTransferPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/Transfers/:accountNo"
        element={
          <PrivateRoute>
            <TransferPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />

      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/terms-conditions" element={<TermsConditionsPage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/faqs" element={<FaqsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;
