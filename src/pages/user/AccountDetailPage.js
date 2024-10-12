import React from "react";
import { useParams } from "react-router-dom";
import AccountDetails from "../../components/account/AccountDetails";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";

const AccountDetailPage = () => {
  const { accountNo } = useParams();

  return (
    <>
      <PageHeader title="Details" />
      <Spacer />
      <AccountDetails accountNo={accountNo} />
      <Spacer />
    </>
  );
};

export default AccountDetailPage;
