import React from "react";
const ServiceItem = ({ title, address }) => {
  return (
    <div className="home-service-item fluid-height">
      <div className="home-service-details full-height">
        <div className="home-service-image">
          <img src={address} alt="service" />
        </div>
        <div className="home-service-text">
          <h3>{title}</h3>
          <p>
            Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod
            empor inddunt ut ualor sit amet
          </p>
        </div>
      </div>
    </div>
  );
};
export default ServiceItem;