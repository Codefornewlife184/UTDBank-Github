import React from "react";
import PageHeader from "../components/common/PageHeader";

import Terms from "../components/Terms";

const HomePage = () => {
  return (
    <>
      <PageHeader title="Terms & Conditions" image="terms.png" />
      <Terms />
    </>
  );
};

export default HomePage;
