import React from "react";
import PageHeader from "../components/common/PageHeader";
import Service from "../components/services/Service";

const ServicesPage = () => {
  return (
    <div>
      <PageHeader title="Services" image="service-details-1.png" />
      <Service />
    </div>
  );
};

export default ServicesPage;
