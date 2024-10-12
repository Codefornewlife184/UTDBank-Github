import React from "react";
import SectionTitle from "../common/SectionTitle";
import ServiceItem from "./ServiceItem";
const Service = () => {
  return (
    <section className="home-service-section p-tb-100">
      <div className="container">
        <div className="section-title">
          <h2>Services we are providing</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing sed do</p>
        </div>

        <div className="home-service-content service-page-grid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="home-service-item fluid-height">
                <div className="home-service-details full-height">
                  <div className="home-service-image">
                    <img src="/assets/images/service1.png" alt="service" />
                  </div>
                  <div className="home-service-text">
                    <h3>Drag and drop functionality</h3>
                    <p>
                      Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod empor inddunt ut ualor sit
                      amet
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem title="Email notifications" address="/assets/images/service2.png" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem title="Deadline reminders" address="/assets/images/service3.png" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem title="Simple dashboard" address="/assets/images/service4.png" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem title="Incredible infrastructure" address="/assets/images/service5.png" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <ServiceItem title="Drag and drop functionality" address="/assets/images/service1.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
