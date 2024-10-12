import React from "react";
import SectionTitle from "../common/SectionTitle";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  const data = [
    {
      id: 1,
      title: "Fully Encrypted",
      img: "/assets/images/file.png",
      content:
        " Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod tempor incid-idunt ut dolor sit amet",
    },

    {
      id: 2,
      title: "Transparent Pricing",
      img: "/assets/images/hand.png",
      content:
        " Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod tempor incid-idunt ut dolor sit amet",
    },

    {
      id: 3,
      title: "Safe and Secure",
      img: "/assets/images/megaphone.png",
      content:
        " Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed deimod tempor incid-idunt ut dolor sit amet",
    },
  ];

  const sectionTitle = [
    {
      id: 1,
      title: "",
      content: "",
    },
  ];

  return (
    <section className="feature-section p-tb-100 overflow-x-hidden">
      <div className="container">
        {/* <!-- SECTION TITLE START --> */}
        <SectionTitle
          title="Our valuable features"
          content="Lorem ipsum dolor sit amet consectetur adipisicing sed do"
        />

        {/* <!-- SECTION TITLE END --> */}
        <div className="home-feature">
          <div className="home-feature-carousel owl-carousel owl-theme">
            {data.map((card) => (
              <div key={card.id}>
                <FeaturesCard title={card.title} img={card.img} content={card.content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
