import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";

const Services = () => {
  const data = [
    {
      key: 1,
      image: "/assets/images/service1.png",
      title: "Drag and drop functionality",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod agnamqua ptatem consectetur.",
    },

    {
      key: 2,
      image: "/assets/images/service2.png",
      title: "Email notifications",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod agnamqua ptatem consectetur.",
    },

    {
      key: 3,
      image: "/assets/images/service3.png",
      title: "Deadline reminders",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod agnamqua ptatem consectetur.",
    },
    {
      key: 4,
      image: "/assets/images/service4.png",
      title: "Simple dashboard",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod agnamqua ptatem consectetur.",
    },

    {
      key: 5,
      image: "/assets/images/service5.png",
      title: "Incredible infrastructure",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod agnamqua ptatem consectetur.",
    },
  ];

  return (
    <section className="home-service-section pt-100 pb-70">
      <div className="container">
        <div className="home-service-content">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="home-service-item fluid-height">
                <div className="home-service-start full-height">
                  {/* <!-- SECTION TITLE START --> */}
                  <SectionTitle
                    title="Entirely providing best services"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      sed do eiusmod agnamqua ptatem consectetur."
                  />

                  {/* <!-- SECTION TITLE END --> */}

                  <Link to="/services" className="btn1 blue-gradient btn-with-image">
                    <i className="flaticon-login"></i>
                    <i className="flaticon-login"></i>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            {data.map((card) => (
              <div className="col-sm-12 offset-md-3 col-md-6 offset-lg-0 col-lg-4" key={card.key}>
                {/* <!-- SERVICE ITEM START --> */}
                <div className="home-service-item fluid-height">
                  <div className="home-service-details full-height">
                    <div className="home-service-image">
                      <img src={card.image} alt="service" />
                    </div>
                    <div className="home-service-text">
                      <h3>{card.title}</h3>
                      <p>{card.content}</p>
                      <a href="service-details.html">Read More +</a>
                    </div>
                  </div>
                </div>
                {/* <!-- SERVICE ITEM END --> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
